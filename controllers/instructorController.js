import Instructor from '../models/Instructor.js';

// Get all instructors
export const getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a new instructor
export const createInstructor = async (req, res) => {
  try {
    const newInstructor = new Instructor(req.body);
    await newInstructor.save();
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update an instructor
export const updateInstructor = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedInstructor = await Instructor.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedInstructor);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Delete an instructor
export const deleteInstructor = async (req, res) => {
  const { id } = req.params;

  try {
    await Instructor.findByIdAndDelete(id);
    res.status(200).json({ message: "Instructor deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
