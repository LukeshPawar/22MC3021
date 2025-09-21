const express = require("express");
const router = express.Router();
const { createShortUrl, getStats, redirectUrl } = require("../Controllers/urlController");

router.post("/shorturls", createShortUrl);
router.get("/stats/:shortId", getStats);
router.get("/:shortId", redirectUrl);

module.exports = router;
