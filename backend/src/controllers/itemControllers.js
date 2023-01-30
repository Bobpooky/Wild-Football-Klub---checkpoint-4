const itemModel = require("../models/item.models");

// getItem

const getItem = (req, res) => {
  itemModel
    .getAllItems()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getItemById = (req, res) => {
  itemModel
    .getAllItemsById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.warn(err);
    });
};

module.exports = {
  getItem,
  getItemById,
};
