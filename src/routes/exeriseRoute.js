const express = require("express");
const {
  CreateExercise,
  DeleteExercise,
} = require("../controllers/exeriseControllers");
const router = express.Router();

router.post("/create", CreateExercise);
router.delete("/delete/:excriseId", DeleteExercise);

module.exports = router;
