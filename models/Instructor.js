import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true }
}, { _id: false });

const socialsSchema = new mongoose.Schema({
  facebook: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  behance: { type: String, default: '' },
  dribbble: { type: String, default: '' }
}, { _id: false });

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    default: "5+ Năm Kinh Nghiệm",
  },
  bio: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "blue",
  },
  image: {
    type: String,
    default: "",
  },
  skills: [{
    type: String
  }],
  socials: {
    type: socialsSchema,
    default: () => ({})
  },
  courses: [courseSchema]
}, { timestamps: true });

const Instructor = mongoose.model('Instructor', instructorSchema);

export default Instructor;
