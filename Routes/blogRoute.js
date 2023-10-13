const blogroute = require("express").Router();

blogroute.get("/express", (req, res) => {
    res.write("<h1>What is Express?</h1>");
    res.write("<h2>Express is a framework built on top of Node.It makes it easier to organize your applications functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.</h2>");
    res.write("<h2>Why Express?</h2>");
    res.write("<h3><ul>");
    res.write("<li>Develops Node.js web applications quickly and easily.</li>");
    res.write("<li>Allows you to define application routes using HTTP methods and URLs.</li>");
    res.write("<li>Includes a number of middleware modules that can be used to execute additional requests and responses activities.</li>");
    res.write("<li>Allows you to specify a middleware for handling errors.</li>");
    res.write("</ul></h3>");
    res.end();
})

blogroute.get("/hollywood", (req, res) => {
    res.send("<h1>This is Hollywood page!</h1>");
})

blogroute.post("/fitness", (req, res) => {
    res.send("<h1>Posting data into server - Fitness page</h1>");
})

blogroute.get("/food", (req, res) => {
    res.send("<h2>Food Page</h2>")
})

module.exports = blogroute;