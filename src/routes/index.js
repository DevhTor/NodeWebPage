const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('layouts/main');
});

//export
module.exports = router;
