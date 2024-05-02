const router = require("express").Router();
const { Job } = require('../../models/jobModel');

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const jobs = await Job.find({ companyId: id });
        if (!jobs) {
            return res.status(404).json({ message: "Job data can not found" });
        }
        res.status(200).json(jobs)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;