const {Router} = require('express');
const cedulaservicecontroller = require("../controllers/cedulaservice.js")
router = Router();



router.post('/validar', cedulaservicecontroller.validar);



module.exports = router;


