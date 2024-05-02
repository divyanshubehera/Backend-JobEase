const router = require("express").Router();
const { Applicant, applicantValidate } = require('../../models/applicantModel');
const { Company, companyValidate } = require('../../models/companyModel');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try {
        if (req.body.userType == "Applicant") {

            const { userType, email } = req.body;
            const { error } = applicantValidate(req.body);
            if (error) {
                return res.status(400).send({ success: false, message: error.details[0].message });
            }

            const applicant = await Applicant.findOne({ email: req.body.email });
            if (applicant) {
                return res.status(409).send({ success: false, message: "Email alredy exists" });
            }

            if (req.body.password !== req.body.cpassword) {
                return res.status(400).send({ success: false, message: "Password and Confirm password does not match!" });
            }

            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword = await bcrypt.hash(req.body.password, salt);

            const applicantData = new Applicant({
                userType,
                email,
                password: hashPassword,
            });
            await new Applicant(applicantData).save();
            res.status(201).send({ success: true, message: "User created" });
        }else if(req.body.userType == "Comapny"){
            const { userType, email } = req.body;
            const { error } = companyValidate(req.body);
            if (error) {
                return res.status(400).send({ success: false, message: error.details[0].message });
            }

            const company = await Company.findOne({ email: req.body.email });
            if (company) {
                return res.status(409).send({ success: false, message: "Email alredy exists" });
            }

            if (req.body.password !== req.body.cpassword) {
                return res.status(400).send({ success: false, message: "Password and Confirm password does not match!" });
            }

            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword = await bcrypt.hash(req.body.password, salt);

            const companyData = new Company({
                userType,
                email,
                password: hashPassword
            });
            await new Company(companyData).save();
            res.status(201).send({ success: true, message: "User created" });
        }else{
            res.status(201).send({ success: false, message: "Enter your Role" });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal server error" });
    }
})



module.exports = router;