const express = require("express");

const router = express.Router();

const { getStickerImage } = require("../controller/sticker");

router.get("/getStickerImage", getStickerImage);

module.exports = router;
