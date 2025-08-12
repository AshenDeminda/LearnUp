# LearnUp - Educational Platform

A full-stack educational platform built with React frontend and Node.js backend, featuring user authentication, quiz management, and learning content.

## Features

- **User Authentication**: Sign up, sign in, and user management
- **User Settings**: Update profile, change password, manage account
- **Quiz System**: Take quizzes and track results
- **Learning Content**: Articles and tutorials
- **Responsive Design**: Modern UI with mobile-friendly interface

## Tech Stack

### Frontend
- React 19
- React Router for navigation
- Context API for state management
- CSS for styling

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Project Structure

```
LearnUp/
├── client/                 # React frontend
│   ├── src/
│   │   ├── api/           # API service files
│   │   ├── components/    # React components
│   │   ├── context/       # React context
│   │   ├── pages/         # Page components
│   │   └── styles/        # CSS files
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Custom middleware
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   └── server.js      # Main server file
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp env.example .env
   ```

4. **Configure environment variables:**
   - Set your MongoDB connection string in `MONGODB_URI`
   - Generate a strong JWT secret in `JWT_SECRET`
   - Adjust `PORT` if needed

5. **Start the server:**
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### User Management
- `PUT /api/users/profile` - Update user profile (protected)
- `PUT /api/users/password` - Change password (protected)
- `PUT /api/users/profile-image` - Update profile image (protected)
- `DELETE /api/users/account` - Delete account (protected)

### Quiz Results
- `POST /api/quizzes/results` - Save quiz result (protected)
- `GET /api/quizzes/results` - Get user's quiz results (protected)
- `GET /api/quizzes/results/:quizId` - Get specific quiz result (protected)
- `GET /api/quizzes/best-scores` - Get user's best scores (protected)

## Database Models

### User
- `name`: User's full name
- `email`: Unique email address
- `password`: Hashed password
- `age`: User's age (optional)
- `profileImage`: Profile picture URL (optional)

### UserQuizResult
- `userId`: Reference to User
- `quizId`: Quiz identifier
- `score`: Quiz score (0-100)
- `userAnswers`: User's answers to questions
- `isSubmitted`: Whether quiz was completed
- `completedAt`: Timestamp of completion

## Environment Variables

Create a `.env` file in the server directory:

```env
MONGODB_URI=mongodb://localhost:27017/learnup
JWT_SECRET=your_secure_jwt_secret_here
PORT=5000
NODE_ENV=development
```

## Development

- Backend runs on port 5000
- Frontend runs on port 5173
- MongoDB should be running on port 27017 (default)
- Use `npm run dev` in both directories for development

## Production

- Set `NODE_ENV=production` in backend
- Build frontend with `npm run build`
- Serve frontend build files from backend
- Use environment-specific MongoDB connection strings

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation and sanitization
- CORS configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
