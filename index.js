const express = require('express');
const app = express();

app.get('/',(req, res, next) => {
  const username = req.headers.username;
  const pass = req.headers.pass;
  const userId = req.query.userId;

  if(username === "sam" && pass === "admin"){
    if(userId==1){
      res.json({
        msg: "Welcome Back"
      })
    }
  }
  res.status(400).json({"msg":"Done"})
});
app.listen(3000);