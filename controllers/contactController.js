import Contact from '../models/Contact.js';

// Get all contacts (for admin)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // Newest first
    res.status(200).json(contacts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a new contact (when user submits form)
export const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update contact status (for admin)
export const updateContactStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id, 
      { status }, 
      { new: true }
    );
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Delete a contact
export const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
