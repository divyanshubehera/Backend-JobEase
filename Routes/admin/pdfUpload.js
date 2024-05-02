const router = require('express').Router();
const multer = require('multer');

const pdfDetails = require('../../models/pdfModel');

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
var multiupload = upload.fields([{name: 'file'}, {name: 'icon'}]);

router.post("/", multiupload, async (req, res) => {
  if(req.files){
    console.log(req.files);
  }
  const { title } = req.body;
  const pdfFileName = req.files.file[0].filename;
  const iconFileName = req.files.icon[0].filename;

  try {
    await pdfDetails.create({ title: title, pdf: pdfFileName, icon: iconFileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

module.exports = router;
