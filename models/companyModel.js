const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity')

const companySchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    userType: {type: String, required: true},
});

companySchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "300s"});
    return token;
}

const Company = mongoose.model("company", companySchema);

const companyValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        cpassword: Joi.string().required().label("Confirm Password"),
        userType: Joi.string().required().label("User Type"),
    });
    return schema.validate(data);
}

module.exports = {Company, companyValidate}
