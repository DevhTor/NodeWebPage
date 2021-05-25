const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('partials/index');
});

router.get("/prueba", (req, res) => {
  res.render('partials/prueba');
});

//export
module.exports = router;
