# Quick Setup Guide for LearnUp

## 🚀 Get Started in 5 Minutes

### 1. Backend Setup
```bash
cd server
npm install
cp env.example .env
```

**Edit `.env` file:**
```env
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=generate_a_random_string_here
PORT=5000
NODE_ENV=development
```

**Start backend:**
```bash
npm run dev
```

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```

### 3. Access Your App
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- API Health: http://localhost:5000/api/health

## 🔧 What You Need

1. **MongoDB**: Local or cloud instance (MongoDB Atlas)
2. **Node.js**: Version 16 or higher
3. **Your MongoDB URI**: Add it to the `.env` file

## 📝 Example MongoDB URI
- Local: `mongodb://localhost:27017/learnup`
- Atlas: `mongodb+srv://username:password@cluster.mongodb.net/learnup`

## 🎯 Features Ready to Use
- ✅ User signup/signin
- ✅ User profile management
- ✅ Quiz result tracking
- ✅ Protected API routes
- ✅ JWT authentication
- ✅ Password hashing

## 🚨 Troubleshooting
- Make sure MongoDB is running
- Check your connection string in `.env`
- Ensure ports 5000 and 5173 are available
- Check console for error messages

## 📚 Next Steps
1. Test user registration
2. Try taking a quiz
3. Check your profile settings
4. Explore the API endpoints

Happy coding! 🎉
