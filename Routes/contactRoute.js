const contactroute = require("express").Router();

contactroute.get("/contact", (req, res) => {
    res.send("<h1>Contact Details</h1>");
})

module.exports = contactroute;