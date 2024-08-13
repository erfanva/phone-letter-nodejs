const express = require("express");

const router = express.Router();

const rootRoute = require("./root");

router.use(rootRoute);

module.exports = router;
