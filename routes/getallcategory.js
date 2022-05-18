const express = require("express");

const router = express.Router();

const { findByCategoryId } = require("../controller/getallcategory");

router.get("/findByCategoryId/:id", findByCategoryId);

module.exports = router;
