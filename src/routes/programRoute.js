const express = require("express");
const {
  CreateProgram,
  DeleteProgram,
  EditProgram,
} = require("../controllers/programController");

const router = express.Router();

router.post("/create", CreateProgram);
router.post("/Edit", EditProgram);
router.post("/Delete", DeleteProgram);

module.exports = router;
