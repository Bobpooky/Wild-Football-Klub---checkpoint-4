const express = require("express");

const router = express.Router();

const playerControllers = require("./controllers/playerControllers");
const teamControllers = require("./controllers/teamControllers");

// players controllers

router.get("/player", playerControllers.getPlayer);
// router.get("/items/:id", itemControllers.getItemById);
// router.put("/items/:id", itemControllers.modifyItem);
router.post("/player", playerControllers.postPlayer);
// router.delete("/items/:id", itemControllers.deleteItem);

// team controllers
router.get("/team", teamControllers.getTeam);
router.post("/team", teamControllers.postTeam);

module.exports = router;
