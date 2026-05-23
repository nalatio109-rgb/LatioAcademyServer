import express from 'express';
import { getCourses, createCourse, deleteCourse, updateCourse, reorderCourses } from '../controllers/courseController.js';

const router = express.Router();

// GET all courses
router.get('/', getCourses);

// POST a new course
router.post('/', createCourse);

// PUT reorder courses (must be before /:id)
router.put('/reorder', reorderCourses);

// PUT update a course
router.put('/:id', updateCourse);

// DELETE a course
router.delete('/:id', deleteCourse);

export default router;
