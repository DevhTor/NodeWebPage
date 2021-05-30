const express = require("express");
const router = express.Router();


router.get('/', (req, res)=>{
  res.render('partials/login');
});

router.get('/login', (req, res)=> {
  res.render('partials/login');
});

router.get("/arquitectura", (req, res) => {
  res.render('partials/arquitectura', {logged: true});
  
});

router.get("/biografia", (req, res) => {
  res.render('partials/biografia', {logged: true});
});

router.get("/etiquetas", (req, res) => {
  res.render('partials/etiquetas', {logged: true});
});

router.get("/banreservas", (req, res) => {
  res.render('partials/banreservas', {logged: true});
});

router.get("/cedula", (req, res) => {
  res.render('partials/cedula', {logged: true});
});

router.get("/menudinamico", (req, res) => {
  res.render('partials/menudinamico', {logged: true});
});

router.get("/contactos", (req, res) => {
  res.render('partials/contactos', {logged: true});
});

router.get("/form-multipagina", (req, res) => {
  res.render('partials/multistep', {logged: true});
});

router.get("/spring-framework", (req, res) => {
  res.render('partials/springframework', {logged: true});
});

router.get("/mvc", (req, res) => {
  res.render('partials/mvc', {logged: true});
});

router.get("/servicio-web", (req, res)=>
{
  res.render("partials/cedulaservice", {logged: true});
});

router.get("/database", (req, res) => {
  res.render('partials/database', {logged: true});
});

router.get("/ajax", (req, res) => {
  res.render('partials/ajax', {logged: true});
});

router.get("/json", (req, res) => {
  res.render('partials/json', {logged: true});
});

router.get("/xml", (req, res) => {
  res.render('partials/xml', {logged: true});
});


//export
module.exports = router;
