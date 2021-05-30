const express = require("express"); //framework principal
const morgan = require("morgan"); //mostrar peticiones en consola
const exphbs = require("express-handlebars"); //motor de plantillas
const path = require("path");
const dotenv = require("dotenv");
const mysql = require('mysql');


 

//initializations
const app = express();

//settings
app.set("port", process.env.PORT || 5000); //si existe un puerto usalo sino usa 4000
app.set("views", path.join(__dirname, "views")); //define la ruta de la carpeta views
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main", //define el layout por defecto
    layoutDir: path.join(app.get("views"), "layouts"), // define la ruta de la carpeta layout
    partialsDir: path.join(app.get("views"), "partials"), // define la ruta de la carpeta partials
    extname: ".hbs", // Define la extension de los archivos del motor de plantillas
  })
);
app.set("view engine", ".hbs");
dotenv.config({path: path.join(__dirname + '/.env')}); //define la ruta de .env
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//middleware
app.use(morgan("dev")); //invocar por consola el comando dev desde mi package.json

//global variables

app.use((req, res, next) => {
  //app.locals.logged = true;//app.get("loggedvar");
  next();
});

//routes
app.use(require("./routes/index.js"));
app.use(require("./routes/auth.js"));
app.use(require("./routes/cedulaservice.js"));

//database

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

db.connect((error)=>{
  if(error){
    console.log(error);
  }else{
    console.log('Database Conected')
  }
});

//public
app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

module.exports = app;