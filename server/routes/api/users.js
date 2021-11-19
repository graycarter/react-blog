const router = require("express").Router();
let users = require("../../Users.json");
const mongoose = require("mongoose");


mongoose.connect(
  "mongodb+srv://admin:Silvan6748.@cluster0.tkq2x.mongodb.net/blogdb?retryWrites=true&w=majority"
);

const User = mongoose.model("user", {
  name: String,
  email: String,
  password: String,
  status: Boolean
});

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  user = users.filter((user) => user.id === parseInt(req.params.id));
  res.json(user);
});

router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    status: req.body.status
  });
  newUser.save().then(() => console.log("new User added"));
  res.json(newUser);
});

router.delete("/:id", (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.id));
  res.json(users);
});
module.exports = router;
