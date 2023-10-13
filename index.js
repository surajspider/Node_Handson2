const express = require("express");
const app = express();

const blogroute = require("./Routes/blogRoute");
const userroute = require("./Routes/userRoute");
const contactroute = require("./Routes/contactRoute");
const apidata = require("./JsonData");
const api = JSON.stringify(apidata);

app.use("/api/main", blogroute);

app.use("/api/main/", userroute);

app.use("/api/main", contactroute);

app.get("/", (req, res) => {
    res.send("<h1>This is Home page!</h1>");
});

app.post("/apidata", (req, res) => {
    res.send(api);
})
app.listen(4000, () => {
    try {
        console.log("This is running on Port 4000");
    }
    catch (err) {
        console.log("Error Occurred", err);
    }
})