const CONNECTION = require("../config/conn");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

exports.getallCategory = async (req, res) => {
  try {
    const sqlQuery = `select * from category`;

    CONNECTION.query(sqlQuery, (err, result) => {
      if (err) {
        return res
          .status(501)
          .json({ status: false, message: "server error", data: err.message });
      }
      if (!result.length) {
        return res
          .status(404)
          .json({ status: false, message: "Empty Category" });
      }

      return res
        .status(200)
        .json({ status: true, message: "Display Data", data: result });
    });
  } catch (error) {
    return res.status(501).json({
      status: false,
      data: error.message,
    });
  }
};
