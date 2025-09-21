const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
    },
    shortId: { type: String, required: true, unique: true },
    shortUrl: { type: String, required: true },
    creationDate: { type: Date, default: Date.now },
    expiry: { type: Date, required: true },
    clicks: { type: Number, default: 0 },
    visitingHistory: [
        {
            timestamp: { type: Date, default: Date.now },
            referrer: { type: String, default: "direct" },
            location: { type: String, default: "unknown" }
        }
    ]
});

module.exports = mongoose.model("Url", urlSchema);
