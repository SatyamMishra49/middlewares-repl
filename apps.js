const express = require("express");
const app = express();

function usermiddleware(req, res, next) {
  if (username != "sam" && password != "admin") {
    res.status(403).json({ msg: "Invalid User" });
  } else {
    next();
  }
}

app.get("/odd", usermiddleware, function (req, res) {
  res.send("You are all set to go....");
});

app.listen(3001);
