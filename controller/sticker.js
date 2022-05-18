const CONNECTION = require("../config/conn");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

exports.getStickerImage = async (req, res) => {
  try {
    const sqlQuery = `SELECT sticker_id,sticker_image_link,json_length(sticker_image_link,'$.sticker')as sticker_count FROM sticker`;

    CONNECTION.query(sqlQuery, (err, result) => {
      if (err) {
        return res

          .status(501)
          .json({ status: false, message: "server error", data: err.message });
      }
      if (!result.length) {
        return res
          .status(404)
          .json({ status: false, message: "Empty Sticker" });
      }

      return res
        .status(200)
        .json({ status: true, message: "Dispaly Data", data: result });
    });
  } catch (error) {
    return res.status(501).json({
      status: false,
      data: error.message,
    });
  }
};
