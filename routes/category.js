const express = require("express");
const router = express.Router();

const { getallCategory } = require("../controller/category");

router.get("/getallCategory/", getallCategory);

module.exports = router;
