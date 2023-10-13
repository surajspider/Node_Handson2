const userrouter = require("express").Router();

userrouter.get("/login", (req, res) => {
    res.send("<h1>Login successfully!!</h1>");
})

userrouter.get("/logout", (req, res) => {
    res.send("<h1>Logged Out Successfully!</h1>")
})

userrouter.post("/signup", (req, res) => {
    res.send("Please Sign up!")
})

module.exports = userrouter;