require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');

const userSignupRouter = require('./Routes/commonRouter/userSignupRouter')
const userSigninRouter = require('./Routes/commonRouter/userSigninRouter')

const searchJobRouter = require('./Routes/commonRouter/searchJobRouter')
const allJobsRouter = require('./Routes/commonRouter/allJobsRouter')
const oneJobRouter = require('./Routes/commonRouter/oneJobRouter')
const applicantProfileAuth = require('./Routes/commonRouter/applicantProfileAuth');
const companyProfileAuth = require('./Routes/commonRouter/companyProfileAuth');
const jobApply = require('./Routes/applicant/applyJob');

const createApplicantProfile = require('./Routes/applicant/profile');
const applicantProfileData = require('./Routes/applicant/getApplicantProfileDataById');
const editApplicantProfile = require('./Routes/applicant/editApplicantProfile')
const editApplicantPassword = require('./Routes/applicant/editPassword');
const getPdf = require('./Routes/applicant/getPdf');
const getPdfById = require('./Routes/applicant/getPdfById');
const applicantMail = require('./Routes/applicant/sendMail')

const createCompanyProfile = require('./Routes/company/profile');
const companyProfileData = require('./Routes/company/getCompanyProfileDataById');
const applicantByCompanyId = require('./Routes/company/getApplicantByCompanyId');
const editCompanyPassword = require('./Routes/company/editPassword');
const editCompanyProfile = require('./Routes/company/editCompanyProfileDataById')
const jobPostRouter = require('./Routes/company/jobPostRouter')
const jobByComapnyId = require('./Routes/company/jobsByComapnyId')
const editJob = require('./Routes/company/editJob')
const deleteJobById = require('./Routes/company/deleteJobById')
const companyMail = require('./Routes/company/sendMail')

const adminLogin = require('./Routes/admin/login');
const getAllData = require('./Routes/commonRouter/getAllData')
const deleteData = require('./Routes/admin/deleteData');
const uploadPdf = require('./Routes/admin/pdfUpload');
const adminMail = require('./Routes/admin/sendMail')

const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');

connection();

app.use(express.json());

app.use(cors());
app.use(express.static(buildPath));

app.use("/files",express.static("files"))

app.use('/api/signup', userSignupRouter);
app.use('/api/signin', userSigninRouter);

app.use('/api/searchjobs', searchJobRouter);
app.use('/api/alljobs', allJobsRouter);
app.use('/api/job/', oneJobRouter);
app.use('/api/applicantprofileauth', applicantProfileAuth);
app.use('/api/companyprofileauth', companyProfileAuth);
app.use('/api/jobapply', jobApply);

app.use('/api/createapplicantprofile', createApplicantProfile);
app.use('/api/applicantprofiledata', applicantProfileData);
app.use('/api/updateapplicantprofile', editApplicantProfile);
app.use('/api/applicant/editpassword', editApplicantPassword);
app.use('/api/getPdf/', getPdf);
app.use('/api/getPdfById', getPdfById);
app.use('/api/applicantmail', applicantMail);

app.use('/api/createcompanyprofile', createCompanyProfile);
app.use('/api/companyprofiledata', companyProfileData);
app.use('/api/updatecompanyprofile', editCompanyProfile);
app.use('/api/company/editpassword', editCompanyPassword);
app.use('/api/postjob', jobPostRouter);
app.use('/api/editjob/', editJob);
app.use('/api/deletejob/', deleteJobById);
app.use('/api/companymail', companyMail);
app.use('/api/jobByComapnyId', jobByComapnyId);
app.use('/api/getapplicantbycomapnyid', applicantByCompanyId);

app.use('/api/admin/login', adminLogin);
app.use('/api/uploadPdf', uploadPdf);
app.use('/api/alldata/', getAllData);
app.use('/api/deletedata/', deleteData);
app.use('/api/adminmail', adminMail);


const port = process.env.PORT || 8000;
app.listen(port, () => { console.log(`Listening on port ${port}`) });