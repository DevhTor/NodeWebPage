const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('partials/index');
});

router.get("/arquitectura", (req, res) => {
  res.render('partials/arquitectura');
});




router.get("/cedula", (req, res) => {
  res.render('partials/cedula');
});



//export
module.exports = router;
