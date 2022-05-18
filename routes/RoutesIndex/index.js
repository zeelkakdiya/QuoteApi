const express = require("express");
const app = express();

const videoPhotoRoutes = require("../videophoto");
const categoryRoutes = require("../category");
const findByCategoryRoutes = require("../getallcategory");
const quotesRoutes = require("../quotes");
const stickerImageRoutes = require("../sticker");

app.use("/videophoto", videoPhotoRoutes);
app.use("/category", categoryRoutes);
app.use("/findByCategoryId", findByCategoryRoutes);
app.use("/quotesRoutes", quotesRoutes);
app.use("/stickerImage", stickerImageRoutes);

module.exports = app;
