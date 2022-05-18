require("./config/conn");
require("./tables/TableIndex/index");

const indexroutes = require("./routes/RoutesIndex/index");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(indexroutes);

app.get("/", (req, res) => {
  const name = "videoplayer app";
  return res.send(name);
});

module.exports = app;
