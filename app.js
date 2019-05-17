const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = new express();
const session = require("express-session");
const flash = require("connect-flash");

const port = 5000;
//body parser
//configure session and flash

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
//configure passport
app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

// view enginge
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.listen(port, () => {
  console.log(` The server started at port ${port} `);
});
