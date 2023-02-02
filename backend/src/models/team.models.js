const database = require("../../database");

// GEt

const getAllTeam = () => {
  return database.query("SELECT * From teams");
};

const getAllTeamById = (id) => {
  return database.query("SELECT * FROM teams, WHERE id=?", [id]);
};

// post
const postTeam = (teamName, avAtk, avDef, shirt) => {
  return database.query(
    "INSERT INTO teams (teamName, avAtk, avDef, shirt) VALUE (?,?,?,?)",
    [teamName, avAtk, avDef, shirt]
  );
};

module.exports = {
  getAllTeam,
  getAllTeamById,
  postTeam,
};
