const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:5000`);
});
