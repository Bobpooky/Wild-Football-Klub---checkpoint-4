const database = require("../../database");

// GEt

const getAllTeam = () => {
  return database.query("SELECT * From teams");
};

const getAllTeamById = (id) => {
  return database.query("SELECT * FROM teams, WHERE id=?", [id]);
};

// post
const postTeam = (teamName, avAtk, avDef) => {
  return database.query(
    "INSERT INTO teams (team_name, avAtk, avDef) VALUE (?,?,?)",
    [teamName, avAtk, avDef]
  );
};

module.exports = {
  getAllTeam,
  getAllTeamById,
  postTeam,
};
