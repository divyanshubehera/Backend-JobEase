const router = require("express").Router();
const { CompanyProfile } = require('../../models/companyProfileModel');

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const companyProfile = await CompanyProfile.find({companyId: id});
        if(companyProfile.length >= 1){
            return res.status(200).json({status: true, message: "Profile already created"});
        }
        res.status(404).json({status: false, message: "Please create your profile"});
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;