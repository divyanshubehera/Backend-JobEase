const router = require('express').Router();
const {Job} = require('../../models/jobModel');
const {applyDetails} = require('../../models/jobApplyModel');
const {Applicant} = require('../../models/applicantModel');
const {ApplicantProfile} = require('../../models/applicantProfileModel');
const {Company} = require('../../models/companyModel');
const {CompanyProfile} = require('../../models/companyProfileModel');

router.delete('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const jobData = await Job.findById(id);
        const applicantData = await Applicant.findById(id);
        const companyData = await Company.findById(id);
        if(!jobData && !applicantData && !companyData){
            return res.status(404).send({message: "Data not found"});
        }

        if(jobData){
            const jobDeleteData = await Job.findOneAndDelete(id);
            return res.status(200).send({message: "Job data deleted"});
        }
        if(applicantData){
            const applicantDeleteData = await Applicant.findByIdAndDelete(id);
            const applicantProfileDeleteData = await ApplicantProfile.findOneAndDelete({applicantId: id});
            const applicantJobApplyDeleteData = await applyDetails.deleteMany({applicantId: id});
            return res.status(200).send({message: "Applicant data deleted"});
        }
        if(companyData){
            const companyDeleteData = await Company.findByIdAndDelete(id);
            const companyProfileDeleteData = await CompanyProfile.findOneAndDelete({companyId: id});
            const companyJobDeleteData = await Job.deleteMany({companyId: id});
            const companyJobApplyDeleteData = await applyDetails.deleteMany({companyId: id});
            return res.status(200).send({message: "Company data deleted"});
        }
        
    } catch (error) {
        return res.status(404).send({message: "Internal Server Error"});
    }
})

module.exports = router;