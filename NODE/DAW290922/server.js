const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/students", (req, res) => {
    let name = req.query.name;
    res.send("Hello " + name);
});

app.post("/students", (req, res) => {
    let name = req.body.name;
    res.send("Hello secure " + name);
});


app.get("/teachers/:name", (req, res) => {
    res.send("Hello Professor " + req.params.name);
});

app.listen(3000,(err) => {
    console.log("Listening on port 3000")
});