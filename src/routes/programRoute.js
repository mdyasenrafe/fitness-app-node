const express = require("express");
const {
  CreateProgram,
  DeleteProgram,
  EditProgram,
} = require("../controllers/programController");

const router = express.Router();

router.post("/create", CreateProgram);
router.put("/edit/:programId", EditProgram);
router.delete("/delete/:programId", DeleteProgram);

module.exports = router;
