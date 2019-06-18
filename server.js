const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("success to GET from server"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});