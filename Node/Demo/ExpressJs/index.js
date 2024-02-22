const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const SERVER_PORT = 2002

// app.bodyParser()
app.get("/", (req, res) => {
    res.send([{
        "id": 1,
        "name": "Esakki M"
    }])
    res.end()
})

app.listen(SERVER_PORT, (err) => {
    console.log("Server Running", SERVER_PORT);
    console.log(err);
})