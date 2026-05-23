import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Mới', 'Đang tư vấn', 'Đã chốt', 'Hủy'],
    default: 'Mới',
  }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
