const router = require("express").Router();
const { CompanyProfile } = require('../../models/companyProfileModel');

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const profileData = await CompanyProfile.find({ companyId: id });
        if (!profileData) {
            return res.status(404).json({ message: "Profile data can not found" });
        }
        res.status(200).json(profileData)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;