const express = require("express");
const app = express();
app.use(express.json());
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
app.use((err, req, res, next) => {
  res.json({ msg: "Error" });
});

app.listen(3001);
