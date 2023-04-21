const ExerciseModel = require("../models/exerciseModel");

exports.CreateExercise = async (req, res) => {
  try {
    const exercise = new ExerciseModel(req.body);
    await exercise.save();
    res.status(200).send({
      error: false,
      message: "exercise created successfully",
      data: exercise,
    });
  } catch (error) {
    res.status(400).send({
      error: true,
      message: error.message,
    });
  }
};

exports.DeleteExercise = async (req, res) => {
  try {
    const { exerciseId } = req.params;
    const exercise = await ExerciseModel.findOneAndDelete(exerciseId);
    if (!exercise) {
      res.status(404).send({
        error: true,
        message: "exercise not found",
      });
    } else {
      res.status(200).send({
        error: false,
        message: "exercise deleted successfully",
        data: exercise,
      });
    }
  } catch (error) {
    res.status(400).send({
      error: true,
      message: error.message,
    });
  }
};
