const router = require("express").Router();
const multer = require('multer');
const  { ApplicantProfile, validateProfile } = require('../../models/applicantProfileModel');

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

router.put('/:id', multiupload, async (req, res) => {
    try {
        const id = req.params.id;
        var { _id,__v, ...rest } = req.body;
        const { error } = validateProfile(rest); 
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        
        rest = {...rest, avatar: req.files.avatar[0].filename, resume: req.files.resume[0].filename};
        const applicantProfileData = await ApplicantProfile.findOneAndUpdate({applicantId: id}, rest, { new: true }); 
        
        if (!applicantProfileData) {
            return res.status(404).json({ message: "Profile Data not found" });
        }
        res.status(200).json({message: "Profile Updated"});
    } catch (error) {
        console.error("Error in updating Proifle:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});

module.exports = router;
