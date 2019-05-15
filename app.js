const express = require("express");
var exphbs = require("express-handlebars");

const app = new express();

const port = 5000;

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
