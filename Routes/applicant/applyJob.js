const router = require('express').Router();

const { applyDetails } = require('../../models/jobApplyModel');



router.post("/", async (req, res) => {

  try {
    await applyDetails.create({...req.body});
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

module.exports = router;
