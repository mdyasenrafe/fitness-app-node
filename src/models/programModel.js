const mongoose = require("mongoose");
const ExerciseModel = require("./exerciseModel");

const programSchema = new mongoose.Schema({
  programName: {
    type: String,
    required: [true, "Please enter program name"],
  },
  Exercises: [ExerciseModel],
});

const ProgramModel = mongoose.model("Program", programSchema);
module.exports = ProgramModel;
