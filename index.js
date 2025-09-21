require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const urlRoutes = require("./Routes/urlRoutes");

const app = express();


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.use("/", urlRoutes);

app.all("*", (req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: "Invalid route"
    });
});

mongoose.connect('mongodb://localhost:27017/url_shortner')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
