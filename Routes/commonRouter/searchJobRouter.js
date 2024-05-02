const router = require("express").Router();
const { Job } = require('../../models/jobModel');


router.get('/:title/:location', async (req, res) => {
    try {
        const { title, location } = req.params;
        let allJobs;
        console.log(req.params)
        if(location == 'undefined' || location == ''){
            allJobs = await Job.find({jobTitle: title});
        }
        else if(title == 'undefined' || title == ''){
            allJobs = await Job.find({jobLocation: location});
        }
        else if((location != 'undefined' || location == '') && (title != 'undefined' || location == '')){
            allJobs = await Job.find({jobTitle: title, jobLocation: location});
        }
        res.status(201).send(allJobs);
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})



module.exports = router;