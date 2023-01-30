const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.getItem);
// router.get("/items/:id", itemControllers.getItemById);
// router.put("/items/:id", itemControllers.modifyItem);
// router.post("/items", itemControllers.postItem);
// router.delete("/items/:id", itemControllers.deleteItem);

module.exports = router;
