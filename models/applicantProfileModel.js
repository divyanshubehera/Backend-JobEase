const mongoose = require('mongoose');
const Joi = require('joi');

const profileSchema = new mongoose.Schema({
    avatar: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: true },
    skills: { type: String, required: true },
    languages: { type: String, required: true },
    hobbies: { type: String, required: true },
    codingPlatform: { type: String, required: true },
    status: { type: String, required: true },
    role: { type: String, required: true },
    resume: { type: String, required: true },

    currentAddress_country: { type: String, required: true },
    currentAddress_state: { type: String, required: true },
    currentAddress_pinCode: { type: String, required: true },

    permanentAddress_country: { type: String },
    permanentAddress_state: { type: String },
    permanentAddress_pinCode: { type: String },

    achievement1_title: { type: String },
    achievement1_description: { type: String },

    achievement2_title: { type: String },
    achievement2_description: { type: String },

    achievement3_title: { type: String },
    achievement3_description: { type: String },

    achievement4_title: { type: String },
    achievement4_description: { type: String },

    resume: { type: String, required: true },
    education1_course: { type: String },
    education1_orgName: { type: String },
    education1_startDate: { type: String },
    education1_endDate: { type: String },
    education1_marks: { type: String },

    education2_course: { type: String },
    education2_orgName: { type: String },
    education2_startDate: { type: String },
    education2_endDate: { type: String },
    education2_marks: { type: String },

    education3_course: { type: String },
    education3_orgName: { type: String },
    education3_startDate: { type: String },
    education3_endDate: { type: String },
    education3_marks: { type: String },

    education4_course: { type: String },
    education4_orgName: { type: String },
    education4_startDate: { type: String },
    education4_endDate: { type: String },
    education4_marks: { type: String },


    workExperiences1_title: { type: String },
    workExperiences1_certificateLink: { type: String },
    workExperiences1_companyName: { type: String },
    workExperiences1_location: { type: String },
    workExperiences1_startDate: { type: String },
    workExperiences1_endDate: { type: String },
    workExperiences1_workDescription: { type: String },

    workExperiences2_title: { type: String },
    workExperiences2_certificateLink: { type: String },
    workExperiences2_companyName: { type: String },
    workExperiences2_location: { type: String },
    workExperiences2_startDate: { type: String },
    workExperiences2_endDate: { type: String },
    workExperiences2_workDescription: { type: String },

    workExperiences3_title: { type: String },
    workExperiences3_certificateLink: { type: String },
    workExperiences3_companyName: { type: String },
    workExperiences3_location: { type: String },
    workExperiences3_startDate: { type: String },
    workExperiences3_endDate: { type: String },
    workExperiences3_workDescription: { type: String },

    workExperiences4_title: { type: String },
    workExperiences4_certificateLink: { type: String },
    workExperiences4_companyName: { type: String },
    workExperiences4_location: { type: String },
    workExperiences4_startDate: { type: String },
    workExperiences4_endDate: { type: String },
    workExperiences4_workDescription: { type: String },


    projects1_title: { type: String },
    projects1_overview: { type: String },
    projects1_deployedLink: { type: String },
    projects1_githubLink: { type: String },
    projects1_description: { type: String },

    projects2_title: { type: String },
    projects2_overview: { type: String },
    projects2_deployedLink: { type: String },
    projects2_githubLink: { type: String },
    projects2_description: { type: String },

    projects3_title: { type: String },
    projects3_overview: { type: String },
    projects3_deployedLink: { type: String },
    projects3_githubLink: { type: String },
    projects3_description: { type: String },

    projects4_title: { type: String },
    projects4_overview: { type: String },
    projects4_deployedLink: { type: String },
    projects4_githubLink: { type: String },
    projects4_description: { type: String },

    internships1_title: { type: String },
    internships1_companyName: { type: String },
    internships1_startDate: { type: String },
    internships1_endDate: { type: String },
    internships1_course: { type: String },

    internships2_title: { type: String },
    internships2_companyName: { type: String },
    internships2_startDate: { type: String },
    internships2_endDate: { type: String },
    internships2_course: { type: String },

    internships3_title: { type: String },
    internships3_companyName: { type: String },
    internships3_startDate: { type: String },
    internships3_endDate: { type: String },
    internships3_course: { type: String },

    internships4_title: { type: String },
    internships4_companyName: { type: String },
    internships4_startDate: { type: String },
    internships4_endDate: { type: String },
    internships4_course: { type: String },


    applicantId: { type: String, required: true }
});

const ApplicantProfile = mongoose.model("Profile", profileSchema);

const validateProfile = (profile) => {
    const schema = Joi.object({
        avatar: Joi.string(),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        linkedin: Joi.string().required(),
        github: Joi.string().required(),
        skills: Joi.string().required(),
        languages: Joi.string().required(),
        hobbies: Joi.string().required(),
        codingPlatform: Joi.string().required(),
        status: Joi.string().required(),
        role: Joi.string().required(),
        codingPlatform: Joi.string().required(),
        resume: Joi.string(),
        currentAddress_country: Joi.string().required(),
        currentAddress_state: Joi.string().required(),
        currentAddress_pinCode: Joi.string().required(),

        permanentAddress_country: Joi.string(),
        permanentAddress_state: Joi.string(),
        permanentAddress_pinCode: Joi.string(),

        achievement1_title: Joi.string(),
        achievement1_description: Joi.string(),

        achievement2_title: Joi.string(),
        achievement2_description: Joi.string(),

        achievement3_title: Joi.string(),
        achievement3_description: Joi.string(),

        achievement4_title: Joi.string(),
        achievement4_description: Joi.string(),

        resume: Joi.string(),
        education1_course: Joi.string(),
        education1_orgName: Joi.string(),
        education1_startDate: Joi.string(),
        education1_endDate: Joi.string(),
        education1_marks: Joi.string(),

        education2_course: Joi.string(),
        education2_orgName: Joi.string(),
        education2_startDate: Joi.string(),
        education2_endDate: Joi.string(),
        education2_marks: Joi.string(),

        education3_course: Joi.string(),
        education3_orgName: Joi.string(),
        education3_startDate: Joi.string(),
        education3_endDate: Joi.string(),
        education3_marks: Joi.string(),

        education4_course: Joi.string(),
        education4_orgName: Joi.string(),
        education4_startDate: Joi.string(),
        education4_endDate: Joi.string(),
        education4_marks: Joi.string(),


        workExperiences1_title: Joi.string(),
        workExperiences1_certificateLink: Joi.string(),
        workExperiences1_companyName: Joi.string(),
        workExperiences1_location: Joi.string(),
        workExperiences1_startDate: Joi.string(),
        workExperiences1_endDate: Joi.string(),
        workExperiences1_workDescription: Joi.string(),

        workExperiences2_title: Joi.string(),
        workExperiences2_certificateLink: Joi.string(),
        workExperiences2_companyName: Joi.string(),
        workExperiences2_location: Joi.string(),
        workExperiences2_startDate: Joi.string(),
        workExperiences2_endDate: Joi.string(),
        workExperiences2_workDescription: Joi.string(),

        workExperiences3_title: Joi.string(),
        workExperiences3_certificateLink: Joi.string(),
        workExperiences3_companyName: Joi.string(),
        workExperiences3_location: Joi.string(),
        workExperiences3_startDate: Joi.string(),
        workExperiences3_endDate: Joi.string(),
        workExperiences3_workDescription: Joi.string(),

        workExperiences4_title: Joi.string(),
        workExperiences4_certificateLink: Joi.string(),
        workExperiences4_companyName: Joi.string(),
        workExperiences4_location: Joi.string(),
        workExperiences4_startDate: Joi.string(),
        workExperiences4_endDate: Joi.string(),
        workExperiences4_workDescription: Joi.string(),


        projects1_title: Joi.string(),
        projects1_overview: Joi.string(),
        projects1_deployedLink: Joi.string(),
        projects1_githubLink: Joi.string(),
        projects1_description: Joi.string(),

        projects2_title: Joi.string(),
        projects2_overview: Joi.string(),
        projects2_deployedLink: Joi.string(),
        projects2_githubLink: Joi.string(),
        projects2_description: Joi.string(),

        projects3_title: Joi.string(),
        projects3_overview: Joi.string(),
        projects3_deployedLink: Joi.string(),
        projects3_githubLink: Joi.string(),
        projects3_description: Joi.string(),

        projects4_title: Joi.string(),
        projects4_overview: Joi.string(),
        projects4_deployedLink: Joi.string(),
        projects4_githubLink: Joi.string(),
        projects4_description: Joi.string(),

        internships1_title: Joi.string(),
        internships1_companyName: Joi.string(),
        internships1_startDate: Joi.string(),
        internships1_endDate: Joi.string(),
        internships1_course: Joi.string(),

        internships2_title: Joi.string(),
        internships2_companyName: Joi.string(),
        internships2_startDate: Joi.string(),
        internships2_endDate: Joi.string(),
        internships2_course: Joi.string(),

        internships3_title: Joi.string(),
        internships3_companyName: Joi.string(),
        internships3_startDate: Joi.string(),
        internships3_endDate: Joi.string(),
        internships3_course: Joi.string(),

        internships4_title: Joi.string(),
        internships4_companyName: Joi.string(),
        internships4_startDate: Joi.string(),
        internships4_endDate: Joi.string(),
        internships4_course: Joi.string(),
        applicantId: Joi.string().required(),
    });
    return schema.validate(profile);
};

module.exports = { ApplicantProfile, validateProfile };
