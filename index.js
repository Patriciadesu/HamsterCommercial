const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://patarananset:Patricia1402@cluster05607.gguiy.mongodb.net/Commercial", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));
mongoose.connection.on("error", (err) => console.log("Failed to connect to MongoDB:", err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.json());

app.use('/api', require('./routes/api'));

// Error-handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

const PORT = process.env.PORT || 8080; // Check here for the port
app.listen(PORT, () => {
    console.log(`Server running on http://152.42.196.107:${PORT}`);
});
