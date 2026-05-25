import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  // Thông tin cốt lõi
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  order: { type: Number, default: 0 },
  showInNavbar: { type: Boolean, default: false },
  
  // Tag và tiêu đề phụ
  tagType: { type: String, default: "KHÓA HỌC CHUYÊN MÔN" },
  tagName: { type: String, default: "LATIO ACADEMY" },
  parentCourse: { type: String, default: "" },
  connectorLabel: { type: String, default: "" },
  
  // Chi tiết tiêu đề thẻ
  titlePrefix: { type: String, default: "" },
  titleSuffix: { type: String, default: "" },
  
  // Thông tin học thuật
  duration: { type: String, default: "8 buổi × 90 phút" },
  format: { type: String, default: "Online" },
  
  // Giá và khuyến mãi
  oldPrice: { type: String, default: "" },
  discount: { type: String, default: "Tặng kèm tài liệu trọn đời" },
  urgencyText: { type: String, default: "Đăng ký ngay!" },
  
  // Footer thẻ
  footerBenefits: { type: [String], default: [] },
  
  // Nội dung chi tiết (Cột phải)
  overheadTag: { type: String, default: "SAU 8 BUỔI HỌC" },
  contentTitlePrefix: { type: String, default: "Trở thành chuyên gia " },
  contentTitleHighlight: { type: String, default: "" },
  features: { type: [String], default: [] },
  spotsLeft: { type: Number, default: 5 },
  
  // Giao diện
  color: { type: String, default: "orange" },
  icon: { type: String, default: "ph-video-camera" }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;
