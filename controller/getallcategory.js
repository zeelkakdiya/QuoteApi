const CONNECTION = require("../config/conn");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

exports.findByCategoryId = async (req, res) => {
  try {
    const limit = req.query.limit;
    const page = req.query.page;
    const offset = (page - 1) * limit;
    const { id } = req.params;
    const sqlQuery = `SELECT c.category_name,v.video_photo_link,v.thumbnail,v.photo_height,v.photo_width from videophoto v INNER JOIN  category c on v.video_photo_id = c.category_id where c.category_id = ${id} limit ${limit} offset ${offset} `;

    CONNECTION.query(sqlQuery, (err, result) => {
      if (err) {
        return res
          .status(501)
          .json({ status: false, messa: "server error", data: err.message });
      }
      if (!result.length) {
        return res
          .status(404)
          .json({ status: false, message: "invalid id", data: "Empty data" });
      }
      return res
        .status(200)
        .json({ status: true, message: `Data diaplay=>${id}`, data: result });
    });
  } catch (error) {
    return res.status(501).json({
      status: false,
      data: error.message,
    });
  }
};
