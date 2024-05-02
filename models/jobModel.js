const mongoose = require('mongoose');
const Joi = require('joi');

const jobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    minSalary: { type: Number, required: true },
    maxSalary: { type: Number, required: true },
    postingDate: { type: Date, default: Date.now },
    companyLogo: { type: String, required: true },
    companyName: { type: String, required: true },
    salaryType: { type: String, required: true },
    jobLocation: { type: String, required: true },
    experienceLevel: { type: String, required: true },
    employementType: { type: String, required: true },
    skills: { type: String, required: true },
    benefits: { type: String, required: true },
    contactName: { type: String, required: true },
    contactEmail: { type: String, required: true },
    outline: { type: String, required: true },
    futureGrowth: { type: String, required: true },
    companyId: { type: String, required: true },
});

const Job = mongoose.model("Job", jobSchema);

const validate = (job) => {
    const schema = Joi.object({
        jobTitle: Joi.string().required().label("Job Title"),
        minSalary: Joi.number().required().label("Min Salary"),
        maxSalary: Joi.number().required().label("Max Salary"),
        postingDate: Joi.date().default(Date.now).label("Posting Date"),
        companyLogo: Joi.string().required().label("Company Logo"),
        companyName: Joi.string().required().label("Company Name"),
        salaryType: Joi.string().required().label("Salary Type"),
        jobLocation: Joi.string().required().label("Job Location"),
        experienceLevel: Joi.string().required().label("Experience Level"),
        employementType: Joi.string().required().label("Employment Type"),
        skills: Joi.string().required().label("Skills"),
        benefits: Joi.string().required().label("Benefits"),
        contactName: Joi.string().required().label("Contact Name"),
        contactEmail: Joi.string().required().email().label("Contact Email"),
        outline: Joi.string().required().label("Outline"),
        futureGrowth: Joi.string().required().label("Future Growth"),
        companyId: Joi.string().required().label("Company Id"),
    });
    return schema.validate(job);
};

module.exports = { Job, validate };
