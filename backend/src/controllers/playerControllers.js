const playerModel = require("../models/player.models");

// getItem

const getPlayer = (req, res) => {
  playerModel
    .getAllPlayer()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getPlayerById = (req, res) => {
  playerModel
    .getAllPlayerById(req.params.id)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.warn(err);
    });
};

// post

const postPlayer = (req, res) => {
  const { name, pseudo, attaque, defense, number } = req.body;
  playerModel
    .postPlayer(name, pseudo, attaque, defense, number)
    .then(() => {
      return res.sendStatus(201);
    })
    .catch((err) => {
      console.warn(err);
    });
};
module.exports = {
  getPlayer,
  getPlayerById,
  postPlayer,
};
