const router = require("express").Router();
const multer = require('multer');
const  { CompanyProfile, validateCompanyProfile } = require('../../models/companyProfileModel');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});

const upload = multer({ storage: storage });
const multiupload = upload.fields([{ name: 'companyLogo' }, { name: 'companyBackground' }]);

router.put('/:id', multiupload, async (req, res) => {
    try {
        const id = req.params.id;
        var { _id,__v, ...rest } = req.body;
        const { error } = validateCompanyProfile(rest); 
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        rest = {...rest, companyLogo: req.files.companyLogo[0].filename, companyBackground: req.files.companyBackground[0].filename};

        const companyProfileData = await CompanyProfile.findOneAndUpdate({companyId: id}, rest, { new: true }); 
        if (!companyProfileData) {
            return res.status(404).json({ message: "Profile Data not found" });
        }
        res.status(200).json({message: "Profile Updated"});
    } catch (error) {
        console.error("Error in updating Proifle:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});

module.exports = router;
