const express = require("express");
const router = new express.Router();
router.use("/api/user", require("./routerUser"));

module.exports = router;
