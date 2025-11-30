# ZonE - Real-Time Chat Application

A modern web-based chat application that enables users to create temporary private chat servers and communicate with others in real-time. The application supports multiple concurrent users with a maximum capacity of 5 clients per server.

## 🎯 Project Overview

ZonE is a full-stack chat application built with modern web technologies, featuring:

- **User Authentication**: Secure login and signup system
- **Dynamic Chat Servers**: Users can create temporary private chat rooms
- **Real-Time Messaging**: Instant message delivery using WebSockets
- **Private Sharing**: Generate unique links to invite users to chat servers
- **Server Capacity Management**: Maximum 5 active clients per server
- **User Profiles**: Personalized user profiles with status indicators
- **Beautiful UI**: Purple and neon cyan theme with smooth animations

## 📋 Tech Stack

### Frontend
- **React 19.2.0** - UI framework
- **React Router 7.9.6** - Navigation and routing
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Vite 7.2.4** - Build tool and dev server

### Backend (To be implemented)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB/PostgreSQL** - Database (TBD)
- **JWT** - Authentication tokens

## 🏗️ Project Structure

```
/home/hiori/Desktop/pr/profile/chat/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── mainpf.jsx          # Main profile and chat page
│   │   │   └── css/
│   │   │       └── mainpf.css      # Profile page styles
│   │   ├── Home.jsx                # Login/Signup page
│   │   ├── App.css                 # Global animations and styles
│   │   ├── index.css               # Tailwind imports
│   │   └── main.jsx                # React entry point with routing
│   ├── vite.config.js              # Vite configuration
│   ├── package.json                # Dependencies
│   └── index.html                  # HTML template
├── backend/                        # (To be created)
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── package.json
└── readme.md                       # This file
```

## 🚀 Current Features (Frontend)

### 1. Authentication Pages
- **Login Page**: Email and password authentication
- **Signup Page**: Create new account with name, username, email, and password
- **Smooth Toggle**: Animated switch between login and signup modes
- **Google OAuth**: Integration ready for Google sign-in

### 2. Home Page
- **Image Slideshow**: Auto-rotating gallery of chat interfaces
- **Manual Navigation**: Arrow buttons and indicator dots
- **Responsive Design**: Adapts to different screen sizes

### 3. Profile Dashboard
- **User Profile Section**: Display user information with avatar
- **Profile Information**: Name, User ID, Email, and Status
- **Action Buttons**: Edit Profile, Settings, and Logout
- **Chat Room Interface**: Message display and input area
- **Message History**: Example messages with user avatars

### 4. Design Elements
- **Color Scheme**: Purple (Primary) + Neon Cyan (Accent)
- **Animations**: Smooth transitions and fade effects
- **Responsive Layout**: Desktop-first approach
- **Custom Scrollbars**: Styled with purple theme

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Login/Signup with slideshow |
| `/mainpf` | Main Profile | User profile and chat interface |

## 🎨 Design System

### Color Palette
- **Dark Base**: `slate-950` (Background)
- **Primary**: `purple-950` to `purple-600` (Main elements)
- **Accent**: `cyan-400` to `cyan-500` (Highlights)
- **Text**: `white` (Primary), `purple-300` (Secondary)

### Typography
- **Headers**: Bitcount Prop Double Ink (Special titles)
- **Body**: System default with Bodoni Moda fallback
- **Inputs**: Londrina Sketch (Decorative)

### Animations
- **Slide In**: 0.6s ease-out
- **Fade In**: 0.3s ease-out
- **Transitions**: 0.4s cubic-bezier(0.4, 0, 0.2, 1)

## 🔄 User Flow

```
User Visit
    ↓
Authentication (Login/Signup)
    ↓
Main Profile Dashboard
    ↓
Create/Join Chat Server
    ↓
Real-Time Messaging
    ↓
Share Private Link with Others
    ↓
Multi-User Chat (Max 5 clients)
```

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The application will be available at `http://localhost:5173`

## 🔧 Environment Configuration

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=ws://localhost:3000
```

## 🚀 Upcoming Features (Backend)

- [ ] User authentication with JWT
- [ ] Database for users and chat servers
- [ ] Real-time WebSocket communication
- [ ] Chat server creation and management
- [ ] Private link generation
- [ ] Message persistence
- [ ] User status tracking
- [ ] Typing indicators
- [ ] Message search functionality
- [ ] User blocking/reporting
- [ ] Chat history export

## 📝 API Endpoints (To be implemented)

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Chat Servers
- `POST /api/servers/create` - Create new server
- `GET /api/servers/:id` - Get server details
- `POST /api/servers/:id/invite` - Generate invite link
- `POST /api/servers/:id/join` - Join server

### Messages
- `GET /api/messages/:serverId` - Get message history
- `POST /api/messages/:serverId` - Send message
- `DELETE /api/messages/:id` - Delete message

## 🔐 Security Features (To be implemented)

- JWT-based authentication
- CORS protection
- Rate limiting
- Input validation and sanitization
- XSS prevention
- CSRF protection
- Secure WebSocket connections (WSS)

## 🧪 Testing (To be implemented)

```bash
# Run tests
npm test

# Coverage report
npm run test:coverage
```

## 📊 Performance Optimization

- Code splitting with React Router
- Image optimization with lazy loading
- Tailwind CSS purging for production
- WebSocket connection pooling
- Message pagination
- Caching strategies

## 🤝 Contributing

Guidelines for contributing to the project:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Developer**: Hiori  
**Status**: In Development (Frontend Complete, Backend Pending)

## 📞 Support

For issues or feature requests, please open an issue in the repository.

## 🗺️ Roadmap

### Phase 1: Frontend (Current)
- ✅ Authentication UI
- ✅ Profile Dashboard
- ✅ Chat Interface Design
- ⏳ Routing and Navigation

### Phase 2: Backend
- ⏳ Node.js/Express setup
- ⏳ Database integration
- ⏳ WebSocket server
- ⏳ API endpoints

### Phase 3: Integration
- ⏳ Frontend-Backend connection
- ⏳ Real-time messaging
- ⏳ User session management

### Phase 4: Enhancement
- ⏳ Mobile responsiveness
- ⏳ Advanced features
- ⏳ Performance optimization
- ⏳ Security hardening

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Socket.IO Guide](https://socket.io/docs)
- [Express.js Tutorial](https://expressjs.com)

---

**Last Updated**: 2025  
**Version**: 0.0.0 (Alpha)
