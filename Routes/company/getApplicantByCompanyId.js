const router = require("express").Router();
const { applyDetails } = require('../../models/jobApplyModel');

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const applydata = await applyDetails.find({ companyId: id });
        if (!applydata) {
            return res.status(404).json({ message: 0 });
        }
        res.status(200).json(applydata)
        console.log(applydata)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;