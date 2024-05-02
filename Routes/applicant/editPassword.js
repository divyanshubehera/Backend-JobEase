const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Applicant } = require('../../models/applicantModel');

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body);

        if (req.body.password !== req.body.conPassword) {
            return res.status(400).send({message: "Password and confirm password do not match"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const updatedApplicant = await Applicant.findByIdAndUpdate(req.params.id, {
            password: hashedPassword
        }, { new: true });

        if (!updatedApplicant) {
            return res.status(404).send("Applicant not found");
        }

        res.send("Password updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
