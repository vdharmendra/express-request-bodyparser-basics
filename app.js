// jshintversion:6
// EXPRESS 
const express = require('express');
// BODY-PERSER
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extend:true}));


// HANDLING REQUEST & RESPONSE [ GET Request ]
// sendFile function used [ not send function ]
app.get("/", function(Req, res){
    res.sendFile(__dirname+'/index.html');
});

//  HANDLING REQUEST & RESPONSE [ POST Request ]

app.post("/", function(req,res){
    var w = Number(req.body.weight);
    var h = Number(req.body.height);

    // console.log("w is "+w +" \n h is"+ h);
    var bmi = (w/(h*h));
    res.send("bmi= "+ bmi);
});




// UNDERSTANDING & WORKING WITH ROUTES
// ABOUT US PAGE 
app.get("/aboutus", function(req,res){
    res.send("This is About Us Page");
});
// THIS IS CONTACT US PAGE
app.get("/contactus", function(req,res){
    res.send("This is Contact Us Page");
});

// EXPRESS APP LISTENING ON PORT 3000
app.listen(3000, function(){
    console.log("Server up and running on port 3000");
});