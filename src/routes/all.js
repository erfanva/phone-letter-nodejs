const express = require("express");

const router = express.Router();

const rootRoute = require("./root");
const combinationsRoute = require("./combinations");

router.use(rootRoute);
router.use('/combinations', combinationsRoute);

module.exports = router;
