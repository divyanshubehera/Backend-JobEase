const router = require("express").Router();
const { ApplicantProfile } = require('../../models/applicantProfileModel');

router.get('/:companyId/:applicantId', async (req, res) => {
    try {
        const id = req.params.id;
        const profileData = await ApplicantProfile.find({ companyId: companyId, applicantId: applicantId });
        if (!profileData) {
            return res.status(404).json({ message: "Profile data can not found" });
        }
        res.status(200).json(profileData)
        console.log(profileData)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;