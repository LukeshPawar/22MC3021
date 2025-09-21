const Url = require("../Models/Model.js");
const shortid = require("shortid");

exports.createShortUrl = async (req, res) => {
    try {
        const { url, validity, shortcode } = req.body;

        if (!url) {
            return res.status(400).json({ error: "URL is required" });
        }

        const shortId = shortcode || shortid.generate();
        if(!validity){
            res.send("Enter the validity")
        }
        const expiry = new Date(Date.now() + (validity) * 60000); 
        const shortUrl = `${req.protocol}://${req.get("host")}/${shortId}`;

        const newUrl = new Url({
            originalUrl: url,
            shortId,
            shortUrl,
            expiry
        });

        await newUrl.save();

        return res.status(201).json({
            shortLink: shortUrl,
            expiry: expiry.toISOString()
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
};

exports.getStats = async (req, res) => {
    try {
        const { shortId } = req.params;
        const urlDoc = await Url.findOne({ shortId });

        if (!urlDoc) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        return res.json({
            totalClicks: urlDoc.clicks,
            originalUrl: urlDoc.originalUrl,
            creationDate: urlDoc.creationDate,
            expiry: urlDoc.expiry,
            visitingHistory: urlDoc.visitingHistory
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
};

exports.redirectUrl = async (req, res) => {
    try {
        const { shortId } = req.params;

        const urlDoc = await Url.findOne({ shortId });

        if (!urlDoc) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        if (urlDoc.expiry < new Date()) {
            return res.status(410).json({ error: "This short URL has expired" });
        }


        urlDoc.clicks += 1;
        urlDoc.visitingHistory.push({ timestamp: new Date() });
        await urlDoc.save();

        return res.redirect(urlDoc.originalUrl); 
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
};
