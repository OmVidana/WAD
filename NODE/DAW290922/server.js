const { response } = require("express");
const express = require("express");
const https = require("https");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

const welcomeMsg = "Welcome to my blog"
const longC= "udgfa dgjad  jskdgjad  dgjad dgjad  dg jskdgjad  dgjad  dgj jskdgjad  dgjad  dgjadgjag dyjad  jskadgjag dyjad  jskjad  dgjadgjag dyjad  dgjadgjag dyjaw"
let posts=[]
weatherKey = "fd93da4c136d2f000cfeaafff6297a76";

app.get("/",(req,res) =>{
    //res.sendFile(__dirname + "/public/html/index.html")
    posts.push({
        title: "My entry blog",
        content: longC
    })
    res.render("home.ejs", { startingContent: welcomeMsg, posts: posts});
});

app.get("/posts/:blogTitle", (req, res) =>{

    res.render("post.ejs",{post:posts[0] });
});

app.get("/students", (req, res) => {
    let name = req.query.name;
    // res.send("Hello " + name);
    res.render('test.ejs', {name: name});
});

app.post("/students", (req, res) => {
    let name = req.body.name;
    res.send('Hello secure ' + name);
});

app.get('/teachers/:name', (req, res) => {
    res.send('Hello Professor ' + req.params.name);
});

app.get('/weather', (req, res) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${weatherKey}`;
    https.get(url, (response) => {
        response.on("data", (data) => {
            let jsonData = JSON.parse(data);
            console.log(JSON.parse(data));
            res.write("welcome to the calentón, located in: " + jsonData["name"]);
            res.write("\nTemp in K: " + jsonData["main"]["temp"]);
            res.write("\nHumidity Sexosa: " + jsonData["main"]["humidity"]);
            res.send()
        });
    }).on("error", (e)=> {
        console.log(`Error ${e.message}`);
        res.send(`Error ${e.message}`);
    }); 
    // console.log('Data logged in console');
});

app.listen(3000,(err) => {
    console.log('Listening on port 3000')
});