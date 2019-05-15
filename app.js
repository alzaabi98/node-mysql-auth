const express = require("express");

const app = new express();

const port = 5000;

// routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen(port, () => {
  console.log(` The server started at port ${port} `);
});
