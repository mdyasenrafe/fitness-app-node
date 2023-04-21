const mongoose = require("mongoose");
const ExerciseModel = require("./exerciseModel").schema;
var Schema = mongoose.Schema;

const programSchema = new mongoose.Schema({
  programId: {
    type: String,
    required: [true, "Please enter program id"],
    unique: true,
  },
  programName: {
    type: String,
    required: [true, "Please enter program name"],
  },
  exercises: {
    type: [ExerciseModel],
    required: [true, "Please enter exercises"],
  },
});

const ProgramModel = mongoose.model("Program", programSchema);
module.exports = ProgramModel;
