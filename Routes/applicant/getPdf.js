const router = require('express').Router();
const pdfDetails = require('../../models/pdfModel');

router.get("/"  ,async (req,res)=>{
    try {
        pdfDetails.find({}).then(data => {
            res.send({status: "ok", data:data });
        });
    } catch (error) {
        res.json({status:"error"});
    }
})

module.exports = router;
