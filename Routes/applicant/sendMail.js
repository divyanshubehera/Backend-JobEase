const router = require('express').Router();
const nodemailer = require('nodemailer')

router.post('/', (req, res) => {
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
          user: "applicant649@gmail.com",
          pass: "cdeh resm wuri skxq",
      }
    });
    console.log(req.body);
    var mailOptions = {
        from: 'applicant649@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.description,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>From: ${req.body.from}</li>
            <li>To: ${req.body.to}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.description}</li>
        </ul>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(400).send({message: "Failed to send Mail"});
      } 
    });

    res.status(200).send({message: "Email Sent"});

});

module.exports = router;
