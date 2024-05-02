const router = require("express").Router();
const { Job, validate } = require('../../models/jobModel');


router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        await new Job({...req.body}).save();
        res.status(201).send({ message: "Job Posted" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;