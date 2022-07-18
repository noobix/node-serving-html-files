const express = require("express");
const file = require("path");

const server = express();
server.get("/", (requestObject, responseObject) => {
  const homepath = file.join(__dirname, "./public/index.html");
  responseObject.sendFile(homepath);
});
server.get("/profile", (requestObject, responseObject) => {
  const profilepath = file.join(__dirname, "./public/profile.html");
  responseObject.sendFile(profilepath);
});
server.get("/about", (requestObject, responseObject) => {
  const aboutpath = file.join(__dirname, "./public/about.html");
  responseObject.sendFile(aboutpath);
});
server.get("*", (requestObject, responseObject) => {
  responseObject.setHeader("Content-Type", "text/html");
  responseObject.write(
    "<h3>Please this page does not exist</h3><p>Error 404</p>"
  );
});
server.listen(3000, () => console.log("server engaged...."));
