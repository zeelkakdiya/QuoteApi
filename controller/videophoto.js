const CONNECTION = require("../config/conn");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

exports.getVideoPhoto = async (req, res) => {
  const limit = req.query.limit;
  const page = req.query.page;
  const offset = (page - 1) * limit;

  try {
    const sqlVideoQuery = `select * from videophoto limit ${limit} OFFSET ${offset}`;
    const sqlQuery = `SELECT c.category_name,v.video_photo_link,v.thumbnail,v.photo_height,v.photo_width from videophoto v INNER JOIN  category c on v.video_photo_id = c.category_id limit ${limit} OFFSET ${offset}`;
    CONNECTION.query(sqlQuery, (err, result) => {
      if (err) {
        return res
          .status(501)
          .json({ status: false, message: "server error", data: err.message });
      }
      if (!result.length) {
        return res
          .status(404)
          .json({ status: false, message: "Empty Photo and Video " });
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
