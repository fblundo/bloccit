const express = require("express");
const router = express.Router();

const staticController = require("../controllers/staticController");
router.get("/", staticController.index);

//router.get("/", (req, res, next) => {
//  res.send("Welcome to Bloccit");
// });

router.get("/marco", (req, res, next) => {
  res.send("Polo"); 
});

module.exports = router;
