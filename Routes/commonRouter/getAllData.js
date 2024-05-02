const router = require("express").Router();
const { Applicant } = require('../../models/applicantModel');
const { Company } = require('../../models/companyModel');
const { Job } = require('../../models/jobModel');

router.get('/', async (req, res)=>{
    const applicantData = await Applicant.find({});
    const companyData = await Company.find({});
    const jobData = await Job.find({});

    if(!applicantData){
        return res.status(400).send({message: "Applicant Data not found"});
    }
    if(!companyData){
        return res.status(400).send({message: "Company Data not found"});
    }
    if(!jobData){
        return res.status(400).send({message: "Job Data not found"});
    }

    res.status(200).send({applicantData: applicantData, companyData: companyData, jobData: jobData});
})

module.exports = router;