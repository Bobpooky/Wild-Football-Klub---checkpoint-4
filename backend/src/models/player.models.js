const database = require("../../database");

// GEt

const getAllPlayer = () => {
  return database.query("SELECT * From players");
};
// const getAllPlayerById = (id) => {
//   return database.query("SELECT * FROM players, WHERE id=?", [id]);
// };

// post
const postPlayer = (name, pseudo, attaque, defense, number) => {
  return database.query(
    "INSERT INTO players (name, pseudo, attaque, defense, number) VALUE (?, ?, ?, ?, ?)",
    [name, pseudo, attaque, defense, number]
  );
};

module.exports = {
  getAllPlayer,
  // getAllPlayerById,
  postPlayer,
};
