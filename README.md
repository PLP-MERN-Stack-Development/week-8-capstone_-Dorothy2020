# AIConnect - AI & Data Science Community Platform
This is the website link

Project link: https://ml-connect.vercel.app/

A comprehensive MERN stack platform connecting AI and Data Science learners, professionals, and researchers across Africa.

## 🚀 Features

- **User Authentication & Profiles**: JWT-based auth with role-based access (student, professional, researcher, entrepreneur)
- **Job Board**: Post and discover AI/Data Science opportunities with advanced filtering
- **Resource Library**: Share and access learning materials (videos, PDFs, courses, research papers)
- **Discussion Forums**: Community-driven Q&A and collaboration spaces
- **Real-time Notifications**: Live updates for new posts, replies, and opportunities
- **Networking**: Connect with peers and industry professionals
- **Mobile Responsive**: Optimized for all devices

## 🛠️ Tech Stack

### Frontend
- **React 18** with Next.js 14 (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Socket.io Client** for real-time features

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Socket.io** for real-time communication
- **Cloudinary** for file uploads
- **Nodemailer** for email notifications

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup
\`\`\`bash
cd server
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
\`\`\`

### Frontend Setup
\`\`\`bash
cd client
npm install
npm run dev
\`\`\`

### Database Setup
\`\`\`bash
# Run the database setup script
cd server
npm run seed
\`\`\`

## 🏗️ Project Structure

\`\`\`
aiconnect/
├── client/                 # React frontend
│   ├── app/               # Next.js app directory
│   ├── components/        # Reusable components
│   ├── lib/              # Utilities and configurations
│   └── public/           # Static assets
├── server/                # Express backend
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Custom middleware
│   ├── controllers/      # Route handlers
│   └── utils/            # Helper functions
└── docs/                 # Documentation
\`\`\`

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Jobs
- `GET /api/jobs` - Get all jobs (with filtering)
- `POST /api/jobs` - Create new job posting
- `GET /api/jobs/:id` - Get specific job
- `PUT /api/jobs/:id` - Update job (owner only)
- `DELETE /api/jobs/:id` - Delete job (owner/admin only)

### Resources
- `GET /api/resources` - Get all resources
- `POST /api/resources` - Upload new resource
- `GET /api/resources/:id` - Get specific resource
- `POST /api/resources/:id/rate` - Rate a resource

### Posts (Forum)
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/:id` - Get specific post with replies
- `POST /api/posts/:id/reply` - Reply to a post
- `PUT /api/posts/:id/vote` - Vote on a post

## 🔄 Real-time Features

The platform uses Socket.io for real-time functionality:

- Live notifications for new jobs, resources, and replies
- Real-time chat between users
- Live activity feeds
- Instant updates on forum discussions

## 🧪 Testing

\`\`\`bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
\`\`\`

## 🚀 Deployment

### Backend (Render/Railway)
1. Create account on Render or Railway
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Configure build settings
3. Set environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create MongoDB Atlas cluster
2. Configure network access
3. Update connection string in environment variables

## 📊 Features Roadmap

### Phase 1 (Current)
- [x] User authentication and profiles
- [x] Job board with basic filtering
- [x] Resource sharing
- [x] Discussion forums
- [x] Real-time notifications

### Phase 2 (Next)
- [ ] Advanced search and filtering
- [ ] AI-powered job recommendations
- [ ] Resume parser and skill matching
- [ ] Video conferencing integration
- [ ] Mobile app (React Native)

### Phase 3 (Future)
- [ ] AI chatbot for community support
- [ ] Gamification and badges
- [ ] Mentorship matching system
- [ ] Event management
- [ ] Payment integration for premium features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead**: [Your Name]
- **Backend Developer**: [Your Name]
- **Frontend Developer**: [Your Name]
- **UI/UX Designer**: [Your Name]

## 📞 Support

For support and questions:
- Email: support@aiconnect.com
- Discord: [Community Server]
- GitHub Issues: [Create an issue]

## 🙏 Acknowledgments

- Thanks to the AI and Data Science community for inspiration
- shadcn/ui for the beautiful component library
- All contributors and beta testers

---

**Built with ❤️ for the AI community in Africa**
\`\`\`

This comprehensive AIConnect platform provides all the core features you outlined in your capstone project plan. The codebase includes:

1. **Complete Frontend**: Landing page, authentication, dashboard with tabs for jobs/resources/forums
2. **Backend API Structure**: User models, authentication middleware, and API endpoints
3. **Database Schema**: MongoDB collections for users, jobs, resources, posts
4. **Real-time Features**: Socket.io setup for live notifications
5. **Professional UI**: Modern, responsive design with shadcn/ui components
