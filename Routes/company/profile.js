const router = require("express").Router();
const multer = require('multer');
const { CompanyProfile, validateCompanyProfile } = require('../../models/companyProfileModel');

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

router.post('/', multiupload, async (req, res) => {
    try {
        const { error } = validateCompanyProfile(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        console.log(req)
        const companyLogoFileName = req.files.companyLogo[0].filename;
        const companyBackgroundFileName = req.files.companyBackground[0].filename;
        await CompanyProfile.create({ ...req.body, companyLogo: companyLogoFileName, companyBackground: companyBackgroundFileName });
        res.status(201).send({ message: "Company profile created" });
    } catch (error) {
        console.error("Error:", error); 
        res.status(500).send({ message: "Internal server error" });
    }
});

module.exports = router;
