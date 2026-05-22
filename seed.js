import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from './models/Course.js';

dotenv.config();

const initialCourses = [
  {
    title: "Edit Video CapCut Thực Chiến",
    description: "Khóa học đi từ cơ bản đến chuyên sâu về CapCut PC. Nắm bắt xu hướng video ngắn, công thức Hook 3s thu hút người xem và ứng dụng các tính năng AI mạnh mẽ để tạo ra những video triệu view.",
    instructor: "Latio Academy",
    price: 2500000
  },
  {
    title: "Photoshop & AI Creative Nâng Cao",
    description: "Khóa học Masterclass dành cho những ai muốn đi sâu vào con đường thiết kế chuyên nghiệp. Khai thác sức mạnh của Midjourney, Stable Diffusion và Runway để bứt phá giới hạn sáng tạo.",
    instructor: "Latio Academy",
    price: 7800000
  },
  {
    title: "Designer 2D Chuyên Nghiệp",
    description: "Khóa học nền tảng tuyệt vời cho người mới bắt đầu. Không cần kinh nghiệm, bạn sẽ được cầm tay chỉ việc để tự thiết kế ra các sản phẩm truyền thông thực tế chuẩn Agency.",
    instructor: "Latio Academy",
    price: 2800000
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding data...');
    // Xoá dữ liệu cũ nếu cần (tuỳ chọn)
    // await Course.deleteMany({});
    
    // Thêm dữ liệu mới
    await Course.insertMany(initialCourses);
    console.log('Seeded successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });
