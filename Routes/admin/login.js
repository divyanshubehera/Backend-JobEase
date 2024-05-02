const router = require('express').Router();
require('dotenv').config();

router.post('/', (req, res)=>{
    try {
        const username = process.env.ADMINUSERNAME;
        const password = process.env.ADMINPASSWORD; 
        if(username !== req.body.username || password !== req.body.password){
            return res.status(404).send({message: "Wrong Username or Password"});
        }
        res.status(200).send({message: "Logged in Successfully"});
    } catch (error) {
        res.status(400).send({message: "Internal Server Error"});
    }
})

module.exports = router;