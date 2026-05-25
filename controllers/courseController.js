import Course from '../models/Course.js';

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ order: 1 });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new course
export const createCourse = async (req, res) => {
  try {
    // Find the course with the highest order
    const lastCourse = await Course.findOne().sort('-order');
    const nextOrder = lastCourse ? lastCourse.order + 1 : 0;
    
    const newCourse = new Course({ ...req.body, order: nextOrder });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Delete a course
export const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a course
export const updateCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    
    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reorder courses
export const reorderCourses = async (req, res) => {
  const { updates } = req.body; // Expects an array of { id, order }

  try {
    const updatePromises = updates.map((update) =>
      Course.findByIdAndUpdate(update.id, { order: update.order })
    );

    await Promise.all(updatePromises);
    
    res.status(200).json({ message: 'Courses reordered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
