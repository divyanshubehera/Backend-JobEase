const router = require("express").Router();
const { Job } = require('../../models/jobModel');


router.get('/', async (req, res) => {
    try {
        const noOfJos = await Job.countDocuments();
        if(noOfJos < 1){
            return res.status(404).json({ message: "Job data not found" });
        }
        const allJobs = await Job.find();
        res.status(201).send(allJobs);
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;