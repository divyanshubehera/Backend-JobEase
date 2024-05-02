const mongoose = require("mongoose");

const jobApplySchema = new mongoose.Schema({
    applicantId:String,
    applicantName:String,
    applicantEmail:String,
    applicantResume:String,
    companyId: String,
    jobName: String,
    jobId: String,
},{collection:"ApplyDetails"})

const applyDetails = mongoose.model( "ApplyDetails", jobApplySchema );

module.exports = { applyDetails } ;