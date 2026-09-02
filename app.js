console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const res = require("express/lib/response");

//MongoDB
const db = require("./server").db();

//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Session

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");
//4 Routing code

// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="color:brown" > HELLO WORLD by DEEN</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="color:blue" > You are on gift page</h1>`);
// });
// app.get("/biznes", function (req, res) {
//   res.render("biznes");
// });
app.post("/create-item", (req, res) => {
  console.log("STEP2: FRONTENDdan BACKENDga kirish");
  console.log(req.body);
  const new_reja = req.body.reja;
  console.log("STEP3:  BACKENDdan DATABASEga jonash");
  db.collection("plans");
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log("STEP4:   DATABASEdan BACKENDga qaytish");
    // console.log(data.ops);
    console.log("STEP5:  BACKENDdan FRONTENDga javob qaytarish");
    res.json(data.ops[0]);
    // res.redirect("/");
  });
});

app.get("/", function (req, res) {
  console.log("STEP2: FRONTENDdan BACKENDga kirish");
  console.log("STEP3:  BACKENDdan DATABASEga jonash");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      console.log("STEP4:   DATABASEdan BACKENDga qaytish");
      console.log(data);
      console.log("STEP5:  BACKENDdan FRONTENDga javob qaytarish");
      res.render("reja", { items: data });
    });
});

module.exports = app;
