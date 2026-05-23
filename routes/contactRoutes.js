import express from 'express';
import { getContacts, createContact, updateContactStatus, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/', createContact);
router.put('/:id', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
