const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`);
});

app.get("/photo", (req, res) => {
  res.sendFile(`${__dirname}/views/photo.html`);
});

app.get("/paintings", (req, res) => {
  res.sendFile(`${__dirname}/views/paintings.html`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
