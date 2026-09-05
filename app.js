console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const res = require("express/lib/response");
const fs = require("fs");

//MongoDB
const db = require("./server").db();
const mongodb = require("mongodb");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR: ", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

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
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  console.log("STEP3:  BACKENDdan DATABASEga jonash");

  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log("STEP4:   DATABASEdan BACKENDga qaytish");
    console.log(data.ops);
    console.log("STEP5:  BACKENDdan FRONTENDga javob qaytarish");
    res.json(data.ops[0]);
    // res.redirect("/");
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    },
  );

  // console.log(id);
  // res.end("done");
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);

  db.collection("plans").findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(data.id),
    },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar ochirildi" });
    });
  }
});

app.get("/", function (req, res) {
  console.log("STEP2: FRONTENDdan BACKENDga kirish");
  console.log("STEP3:  BACKENDdan DATABASEga jonash");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      console.log("STEP4:   DATABASEdan BACKENDga qaytish");
      // console.log(data);
      console.log("STEP5:  BACKENDdan FRONTENDga javob qaytarish");
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
