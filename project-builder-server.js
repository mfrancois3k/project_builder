const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const portfolios = require("./routes/api/portfolios");

const server = express();

// This needs to get fixed
// const mongodbURI = "URI"

// mongoose
//   .connect(mongodbURI)
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.use(express.static("./build"));
server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
server.use("/api/portfolios", portfolios);
