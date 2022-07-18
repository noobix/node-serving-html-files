const express = require("express");
const fs = require("fs");

const server = express();
const handlehomerequest = (requestObject, responseObject) => {
  fs.readFile("src/home.html", (err, html) => {
    if (err) {
      console.log("file not found");
    }
    // responseObject.writeHeader(200, { "Content-Type": "text/plain" });
    responseObject.send(html);
  });
};
const handleprofilerequest = (requestObject, responseObject) => {
  fs.readFile("src/profile.html", (err, html) => {
    if (err) {
      console.log("file not found");
    }
    responseObject.send(html);
  });
};
const handleaboutrequest = (requestObject, responseObject) => {
  fs.readFile("src/about.html", (err, html) => {
    if (err) {
      console.log("file not found");
    }
    responseObject.send(html);
  });
};
server.use("/profile", handleprofilerequest);
server.use("/about", handleaboutrequest);
server.use("/", handlehomerequest);
server.listen(3000, () => {
  console.log("server engaged");
});
