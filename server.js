const express = require("express");
const app = express();
dotenv = require("dotenv").config();
const itemRouter = require("./routes/itemRoutes");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// load routing middleware
app.use("/", itemRouter);

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({ error: err.message });
});

// route handler for root path
app.get("/", (req, res) => {
    res.json({ message: "REST API Info" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
