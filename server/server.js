const express = require("express")
const app = express()
const port = 3000

app.get("/api/data", (req, res) => {
    res.json("this message is from the backend")
})

app.listen(port, () => {
    console.log(`The server listent to port ${port}`)
})