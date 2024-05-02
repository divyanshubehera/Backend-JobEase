const mongoose = require('mongoose');
const Joi = require('joi');

const companyProfileSchema = new mongoose.Schema({
    companyLogo: { type: String, required: true },
    companyBackground: { type: String, required: true },
    companyName: { type: String, required: true },
    industry: { type: String, required: true },
    foundingDate: { type: Date, required: true },
    founders: { type: String, required: true },
    headquartersLocation: { type: String, required: true },
    website: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactAddress: { type: String, required: true },
    socialMediaLinks: { type: String, required: true },
    description: { type: String, required: true },
    missionStatement: { type: String, required: true },
    visionStatement: { type: String, required: true },
    companyCulture: { type: String, required: true },
    productsServices: { type: String, required: true },
    awardsAccolades: { type: String, required: true },
    companyId: {type: String, required: true}
});

const CompanyProfile = mongoose.model("CompanyProfile", companyProfileSchema);

const validateCompanyProfile = (profile) => {
    const schema = Joi.object({
        companyLogo: Joi.string(),
        companyBackground: Joi.string(),
        companyName: Joi.string(),
        industry: Joi.string(),
        foundingDate: Joi.date(),
        founders: Joi.string(),
        headquartersLocation: Joi.string(),
        website: Joi.string(),
        contactEmail: Joi.string().email(),
        contactPhone: Joi.string(),
        contactAddress: Joi.string(),
        socialMediaLinks: Joi.string(),
        description: Joi.string(),
        missionStatement: Joi.string(),
        visionStatement: Joi.string(),
        companyCulture: Joi.string(),
        productsServices: Joi.string(),
        awardsAccolades: Joi.string(),
        companyId: Joi.string()
    });
    return schema.validate(profile);
};

module.exports = { CompanyProfile, validateCompanyProfile };
