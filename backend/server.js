const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Hello, this is Randjeep & Vijay, we're here today to learn about node👋🏻",
  });
});

const routes = require("./routes/routes");
app.use("/", routes);

mongoose.connect(
  "mongodb+srv://davidk:password12345@cluster0.uyzpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {}
);
app.listen(4000, () => {
  console.log("Listening.");
});
