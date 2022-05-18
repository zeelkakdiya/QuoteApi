require("dotenv").config();
const CONNECTION = require("../config/conn");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

exports.getCategoryQuotes = async (req, res) => {
  const limit = req.query.limit;
  const page = req.query.page;
  const offset = (page - 1) * limit;

  const sqlQuery = `SELECT qc.quotes_category as quotes_category_name ,c.category_name 
  from quotes q INNER JOIN quotes_category qc on q.quotes_category_id = qc.quotes_category_id 
  INNER JOIN category c on q.category_id = c.category_id  
  ORDER BY q.quotes_id ASC limit ${limit} offset ${offset} `;

  try {
    CONNECTION.query(sqlQuery, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ status: false, message: "server error", data: err.message });
      }
      if (!result.length) {
        return res.status(404).json({ status: false, message: "Empty Data" });
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
