const express = require("express");
const router = express.Router();
const urlController = require("../Controllers/urlController");

router.post("/shorturls", urlController.createShortUrl);
router.get("/shorturls/:shortId", urlController.getStats);

module.exports = router;
