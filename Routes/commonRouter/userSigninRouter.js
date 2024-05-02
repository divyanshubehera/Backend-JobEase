const router = require('express').Router();
const {Applicant} = require('../../models/applicantModel');
const {Company} = require('../../models/companyModel');
const Joi = require('joi');
const bcrypt = require('bcrypt');

router.post('/', async(req, res)=>{
    try {
        const {error} = validate(req.body);
        if(error){
            return res.status(400).send({ message: error.details[0].message });
        }
        const applicant = await Applicant.findOne({email: req.body.email});
        const company = await Company.findOne({email: req.body.email});
        if(!applicant && !company){
            return res.status(401).send({message: "Invalid Email or Password"});
        }

        if(applicant){
            const validPassword = await bcrypt.compare(
                req.body.password, applicant.password
            );
    
            if(!validPassword){
                return res.status(401).send({message: "Invalid Email or Password"});
            }
            const token = applicant.generateAuthToken();
            res.status(200).send({data:token, userType: "applicant", applicantId: applicant._id, message: "Logged in successfully"});
        }else if(company){
            const validPassword = await bcrypt.compare(
                req.body.password, company.password
            );
    
            if(!validPassword){
                return res.status(401).send({message: "Invalid Email or Password"});
            }
            const token = company.generateAuthToken();
            res.status(200).send({data:token, userType: "company", companyId: company._id, message: "Logged in successfully"});
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})

const validate = (data)=>{
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
}

module.exports = router;