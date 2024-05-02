const router = require("express").Router();
const { ApplicantProfile } = require('../../models/applicantProfileModel');

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const applicantProfile = await ApplicantProfile.find({applicantId: id});
        if(applicantProfile.length >= 1){
            return res.status(200).json({status: true, message: "Profile already created"});
        }
        res.status(404).json({status: false, message: "Please create your profile"});
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;