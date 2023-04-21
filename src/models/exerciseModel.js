const mongoose = require("mongoose");

const excerciseSchema = new mongoose.Schema({
  excrciseId: {
    type: String,
    required: [true, "Please enter exercise id"],
    unique: true,
  },
  exerciseName: {
    type: String,
    required: [true, "Please enter exercise name"],
  },
  exerciseLength: {
    type: Number,
    required: [true, "Please enter exercise length"],
  },
});

const ExerciseModel = mongoose.model("Exercise", excerciseSchema);
module.exports = ExerciseModel;
