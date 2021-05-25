const express = require("express"); //framework principal
const morgan = require("morgan"); //mostrar peticiones en consola
const exphbs = require("express-handlebars"); //motor de plantillas
const path = require("path");

//initializations
const app = express();

//settings
app.set("port", process.env.PORT || 4000); //si existe un puerto usalo sino usa 4000
app.set("views", path.join(__dirname, "views")); //define la ruta de la carpeta views
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main", //define el layout por defecto
    layoutDir: path.join(app.get("views"), "layout"), // define la ruta de la carpeta layout
    partialsDir: path.join(app.get("views"), "partials"), // define la ruta de la carpeta partials
    extname: ".hbs", // Define la extension de los archivos del motor de plantillas
    helpers: require("./lib/handlebars") // Define la ruta del archivo handlebars.js
  })
);
app.set("view engine", ".hbs");

//middleware
app.use(morgan("dev")); //invocar por consola el comando dev desde mi package.json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//global variables
app.use((req, res, next) => {
  next();
});

//routes
app.use(require("./routes/index.js"));
app.use(require("./routes/authentication.js"));
app.use("/links", require("./routes/links.js")); //todas mis enlaces tendran el prefijo links

//public
app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
