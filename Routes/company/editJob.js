const router = require("express").Router();
const { Job, validate } = require('../../models/jobModel');

router.put('/:id', async (req, res) => {
    try {
        const { _id,__v, ...rest } = req.body;
        const { error } = validate(rest); 
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        
        const id = req.params.id;
        const job = await Job.findByIdAndUpdate(id, rest, { new: true }); 
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({message: "Job Updated"});
    } catch (error) {
        console.error("Error in updating job:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});

module.exports = router;
