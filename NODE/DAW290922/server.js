const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

const welcomeMsg = "Welcome to my blog"
const longC= "udgfa dgjad  jskdgjad  dgjad dgjad  dg jskdgjad  dgjad  dgj jskdgjad  dgjad  dgjadgjag dyjad  jskadgjag dyjad  jskjad  dgjadgjag dyjad  dgjadgjag dyjaw"
let posts=[]

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

app.listen(3000,(err) => {
    console.log('Listening on port 3000')
});