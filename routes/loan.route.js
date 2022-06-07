const express = require("express");
const router = express.Router();

const {
  createloan,
} = require("../controllers/loan.controller");


//Route 1: Create a loan querry using : POST "/api/loan/createloan" .
router.post(
  "/createloan",
  createloan
);

module.exports = router;
