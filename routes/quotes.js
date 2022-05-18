const express = require("express");

const router = express.Router();

const { getCategoryQuotes } = require("../controller/categoryquotes");
const { getRandomQuotes } = require("../controller/randomquotes");

router.get("/getCategoryQuotes", getCategoryQuotes);
router.get("/getRandomQuotes", getRandomQuotes);

module.exports = router;
