import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Instructor from './models/Instructor.js';

dotenv.config();

const instructorsData = [
  {
    name: "Duy Long (Long Designer)",
    role: "Lead Graphic Designer & Art Director",
    experience: "5+ Năm Kinh Nghiệm",
    bio: "Giám đốc sáng tạo tự do (Freelance Art Director), từng thiết kế bộ nhận diện thương hiệu cho hơn 50+ nhãn hàng. Có niềm đam mê sâu sắc trong việc kết hợp hội họa truyền thống và công nghệ AI để tạo ra các tác phẩm đột phá.",
    color: "purple",
    image: "https://latio.vn/wp-content/uploads/2023/05/Long-des.png",
    skills: ["Adobe Photoshop & Illustrator", "UI/UX Design & Branding", "Midjourney & Stable Diffusion", "Tư duy Bố cục & Màu sắc"],
    socials: {
      facebook: "https://facebook.com",
      linkedin: "",
      behance: "https://behance.net",
      dribbble: "https://dribbble.com"
    },
    courses: [
      { name: "Designer 2D Chuyên Nghiệp", link: "/courses#design" },
      { name: "Photoshop & AI Creative Nâng Cao", link: "/courses#edit-advanced" }
    ]
  },
  {
    name: "Văn Luận (Luan Media)",
    role: "Senior Performance Marketer",
    experience: "5+ Năm Kinh Nghiệm",
    bio: "Chuyên gia tối ưu hóa quảng cáo chuyển đổi, từng trực tiếp tối ưu hóa ngân sách hàng tỷ đồng/tháng. Đã xây dựng và chuyển giao quy trình vận hành quảng cáo SOP cho hàng chục doanh nghiệp SMEs tại Việt Nam.",
    color: "green",
    image: "https://latio.vn/wp-content/uploads/2023/05/Luan-media.png",
    skills: ["Facebook & TikTok Ads", "Conversion Rate Optimization", "Attributions & Tracking", "Xây dựng Phễu Marketing"],
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      behance: "",
      dribbble: ""
    },
    courses: [
      { name: "Facebook & TikTok Ads", link: "/courses#ads" },
      { name: "Facebook Ads Nâng Cao", link: "/courses#ads-advanced" }
    ]
  },
  {
    name: "Tiến Đạt (Dat Media)",
    role: "Head of Video Production & Editor",
    experience: "5+ Năm Kinh Nghiệm",
    bio: "Từng là Trưởng phòng sản xuất hình ảnh tại các Agency danh tiếng tại Đà Nẵng và HCM. Đứng sau nhiều chiến dịch video viral triệu view trên TikTok & Facebook cho các thương hiệu lớn.",
    color: "orange",
    image: "https://latio.vn/wp-content/uploads/2023/05/Dat-media.png",
    skills: ["CapCut PC & Premiere Pro", "After Effects & Motion", "AI Video Workflow (Runway, Kling)", "Xây dựng Kênh TikTok"],
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      behance: "https://behance.net",
      dribbble: ""
    },
    courses: [
      { name: "Edit Video CapCut Thực Chiến", link: "/courses#edit" }
    ]
  }
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB Connected...');
  
  await Instructor.deleteMany();
  console.log('Cleared existing instructors');

  await Instructor.insertMany(instructorsData);
  console.log('Seeded initial instructors');
  
  process.exit();
}).catch(err => {
  console.error(err);
  process.exit(1);
});
