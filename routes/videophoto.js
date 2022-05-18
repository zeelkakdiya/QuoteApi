const express = require("express");

const router = express.Router();

const { getVideoPhoto } = require("../controller/videophoto");

router.get("/getVideoPhoto", getVideoPhoto);

module.exports = router;
