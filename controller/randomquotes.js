const CONNECTION = require("../config/conn");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

exports.getRandomQuotes = async (req, res) => {
  const limit = req.query.limit;
  const page = req.query.page;
  const offset = (page - 1) * limit;
  const sqlQuery = `select quotes_text,quotes_id from quotes limit ${limit} offset ${offset}`;

  try {
    CONNECTION.query(sqlQuery, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ status: false, message: "server error", data: err.message });
      }
      if (!result) {
        return res.status(404).json({ status: false, message: "Empty Quotes" });
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
