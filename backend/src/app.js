const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(cors());

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// API routes
app.use(router);

module.exports = app;
