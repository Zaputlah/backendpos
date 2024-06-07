const express = require("express");
const { PATH_PRODUCT, productRouter } = require("./apps/products/routers");
const { PATH_CATEGORIES, categoriesRouter } = require("./apps/categories/routers");
const { connectDB } = require("./apps/utils/databases");

const app = express();

app.use(express.json());
connectDB();
app.use(PATH_PRODUCT, productRouter);
app.use(PATH_CATEGORIES, categoriesRouter);

module.exports = { app };
