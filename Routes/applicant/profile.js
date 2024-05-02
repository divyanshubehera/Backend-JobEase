const router = require("express").Router();
const multer = require('multer');
const { ApplicantProfile, validateProfile } = require('../../models/applicantProfileModel');

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
  var multiupload = upload.fields([{name: 'avatar'}, {name: 'resume'}]);

router.post('/', multiupload, async (req, res) => {
    try {
        console.log(req.files);
        const { error } = validateProfile(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const avatarFileName = req.files.avatar[0].filename;
        const resumeFileName = req.files.resume[0].filename;
        await ApplicantProfile.create({ ...req.body, avatar: avatarFileName, resume: resumeFileName });
        
        res.status(201).send({ message: "Profile created" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});

module.exports = router;
