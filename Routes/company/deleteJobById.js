const router = require("express").Router();
const { Job } = require('../../models/jobModel');

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const job = await Job.findByIdAndDelete(id); 
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({message: "Job Deleted"});
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

module.exports = router;
