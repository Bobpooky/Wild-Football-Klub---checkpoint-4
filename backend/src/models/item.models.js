const database = require("../../database");

// GEt

const getAllItems = () => {
  return database.query("SELECT * From users");
};
const getAllItemsById = (id) => {
  return database.query("SELECT * FROM users, WHERE id=?", [id]);
};

module.exports = {
  getAllItems,
  getAllItemsById,
};
