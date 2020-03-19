const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.route("/").get((req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const occupation = req.body.occupation;
  const created = req.body.created;

  const newUser = new User({
    name,
    email,
    occupation,
    created
  });

  newUser
    .save()
    .then(() => res.json("Usuario adicionado com sucesso!"))
    .catch(err => res.status(400).json("Erro: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.json("Usuario deletado com sucesso!"))
    .catch(err => res.status(400).json("Erro: " + err));
});

module.exports = router;
