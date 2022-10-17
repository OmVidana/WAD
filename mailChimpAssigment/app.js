const express = require("express");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.set('view engine', 'html');
app.set('views', __dirname);

let apiKey = 'dc1e36f67454d3287d6986203c8f1b03-us21';
let list_id = 'b35045526f';
let SERVER_PREFIX = 'us21'
app.get("/", (req, res) => {
    res.sendFile(__dirname +"/signup.html")
});
app.post("/", (req, res) => {
    const FNAME = req.body.FNAME;
    const LNAME = req.body.LNAME;
    const EMAIL = req.body.EMAIL;
    
    var data = {
        members: [
            {
                email_address: EMAIL,
                status: "subscribed",
                merge_fields: {
                    FNAME: FNAME,
                    LNAME: LNAME
                }
            }
        ]
    }

    const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${list_id}`;
    const options = {
        method: "POST",
        auth: "0248791@up.edu.mx:" + apiKey
    }
    var jsonData = JSON.stringify(data);
    var mailRequest = https.request(url, options, (response) => {
        if(response.statusCode === 200) {
            response.on("data", (data) => {
                var jsonResp = JSON.parse(data);
                if(jsonResp["error_count"] === 0) {
                    res.send("Ahuevito");
                }
                else {
                    res.send(`No chicos... \n ${jsonResp.errors[0]["error_code"]} \n ${jsonResp.errors[0]["error"]}`);
                }
            }).on("error", (e) => {
                res.send(`Oh cielos. Error ${e}`);
            });
        } 
        else {
            console.log("Realizado con Éxito")
        }
    });
    mailRequest.write(jsonData);
    mailRequest.end();
});

app.get("/failure", (req, res) => {
    res.sendFile(__dirname + "/failure.html")
});

app.get("/success", (req, res) => {
    res.sendFile(__dirname + "/success.html")
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});