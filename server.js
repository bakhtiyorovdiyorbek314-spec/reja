const http = require("http");
const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Deen:7H96VgAGWckOf9HJ@cluster0.dhe4gj5.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      //   console.log(client);
      module.exports = client;
      const mongodb = require("mongodb");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port:${PORT} , http://localhost:${PORT}`,
        );
      });
    }
  },
);
