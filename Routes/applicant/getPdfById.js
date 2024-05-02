const router = require("express").Router();
const pdfDetails = require('../../models/pdfModel');

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const pdf = await pdfDetails.find({_id : id});
        if (!pdf) {
            return res.status(404).json({ message: "PDF data can not found" });
        }
        res.status(200).json(pdf)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;