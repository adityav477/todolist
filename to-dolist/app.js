const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', "ejs");

var listitems = ["bring food", "cook food", "eat food"];
var workitems = [];

app.get("/", function (req, res) {
    var date = new Date();//this givest the long format with gmt and all
    var day = "";

    var options = { weekday: 'long', month: 'long', day: 'numeric' };

    day = date.toLocaleDateString("en-us", options);
    // console.log(day);

    res.render("list", { listtitle: day, listitems: listitems });
    // console.log(listitems);
})

app.post("/", function (req, res) {
    // console.log(req.body);
    if (req.body.button === "Work") {
        workitems.push(req.body.item);
        res.redirect("/work");
    }
    else {
        listitem = req.body.item;
        // console.log(`listitem is ${listitem}`);
        listitems.push(listitem);
        res.redirect("/");
    }
})

app.get("/work", function (req, res) {
    res.render("list", { listtitle: "Work", listitems: workitems });
})

// app.post("/work", function (req, res) {
//     workitems.push(req.body.item);
//     res.redirect("/work");
// })

app.listen(3000, function () {
    console.log("Server is working");
})

//Resources
//for EJS read official document for usig ejs in express
//for date format we used stackover flow 