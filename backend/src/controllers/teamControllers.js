const teamModel = require("../models/team.models");

// getTeam

const getTeam = (req, res) => {
  teamModel
    .getAllTeam()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.warn(err);
    });
};

// const getTeamById = (req, res) => {
//   teamModel
//     .getAllTeamById(req.params.id)
//     .then(([result]) => {
//       res.status(200).send(result);
//     })
//     .catch((err) => {
//       console.warn(err);
//     });
// };

// post

const postTeam = (req, res) => {
  const { teamName, avAtk, avDef, shirt } = req.body;
  teamModel
    .postTeam(teamName, avAtk, avDef, shirt)
    .then(() => {
      return res.sendStatus(201);
    })
    .catch((err) => {
      console.warn(err);
    });
};
module.exports = {
  getTeam,
  // getTeamById,
  postTeam,
};
