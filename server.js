const path = require("path");
const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.static(__dirname + "/build"));

if (process.env.NODE_ENV === "production") {
  app.enable("trust proxy");
  app.use((req, res, next) => {
    req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
  });
}

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => console.log(`Backend listening on port: ${PORT}`));
