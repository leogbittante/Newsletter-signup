const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")    
});

app.post("/", function(req,res) {
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed", 
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

});






app.listen(3000, function() {
    console.log("Server is running on port 3000")
});


//API Key
//29cbd9b4f6ada39a98ee22dadc64d8e0-us17

//List ID
//f85d8cca5e