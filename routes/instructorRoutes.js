import express from 'express';
import { getInstructors, createInstructor, updateInstructor, deleteInstructor } from '../controllers/instructorController.js';

const router = express.Router();

router.get('/', getInstructors);
router.post('/', createInstructor);
router.put('/:id', updateInstructor);
router.delete('/:id', deleteInstructor);

export default router;
