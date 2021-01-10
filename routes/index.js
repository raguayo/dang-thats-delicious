const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

// routes

// route specific middleware
router.get("/", storeController.myMiddleware, storeController.homePage);

// global middleware

router.get("/reverse/:name", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
