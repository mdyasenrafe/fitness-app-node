const ProgramModel = require("../models/programModel");

exports.CreateProgram = async (req, res) => {
  try {
    const { programName, exercises, programId } = req.body;
    const program = new ProgramModel({ programId, programName, exercises });
    await program.save();
    res.status(200).send({
      error: false,
      message: "Program created successfully",
      data: program,
    });
  } catch (error) {
    res.status(400).send({
      error: true,
      message: error.message,
    });
  }
};

exports.EditProgram = async (req, res) => {
  try {
    const { programId } = req.params;
    const program = await ProgramModel.findOneAndUpdate(programId, req.body, {
      new: true,
    });
    if (!program) {
      res.status(404).send({
        error: true,
        message: "Program not found",
      });
    } else {
      res.status(200).send({
        error: false,
        message: "Fitness program updated successfully",
        data: program,
      });
    }
  } catch (error) {
    res.status(400).send({
      error: true,
      message: error.message,
    });
  }
};

exports.DeleteProgram = async (req, res) => {
  try {
    const { programId } = req.params;
    const program = await ProgramModel.findOneAndDelete(programId);
    if (!program) {
      res.status(404).send({
        error: true,
        message: "Program not found",
      });
    } else {
      res.status(200).send({
        error: false,
        message: "Program deleted successfully",
        data: program,
      });
    }
  } catch {
    res.status(400).send({
      error: true,
      message: error.message,
    });
  }
};
