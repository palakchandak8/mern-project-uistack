// server.js - Simple Express + MongoDB Backend
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection String (REPLACE WITH YOUR ATLAS CONNECTION STRING)
const MONGODB_URI = 'mongodb+srv://palaknagar_db_user:PpAYK9RaYvIm9D7b@uistack.w5gkfds.mongodb.net/?appName=UIStack' ;
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// ==================== SCHEMAS ====================

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  github: String,
  phone: String,
  bio: String,
  joinDate: { type: Date, default: Date.now }
});

// Component Schema
const componentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  html: { type: String, required: true },
  css: { type: String, required: true },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Component = mongoose.model('Component', componentSchema);

// ==================== AUTH ROUTES ====================

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password, email, github, phone } = req.body;
    
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      email,
      github,
      phone
    });

    await user.save();
    res.status(201).json({ 
      message: 'User created successfully',
      userId: user._id,
      username: user.username 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({
      message: 'Login successful',
      userId: user._id,
      username: user.username,
      email: user.email
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== USER ROUTES ====================

app.get('/api/users/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/users/:userId', async (req, res) => {
  try {
    const { username, email, github, phone, bio } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { username, email, github, phone, bio },
      { new: true }
    ).select('-password');
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== COMPONENT ROUTES ====================

app.get('/api/components', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== 'all' ? { category } : {};
    
    const components = await Component.find(filter)
      .populate('userId', 'username')
      .sort({ createdAt: -1 });
    
    res.json(components);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/components/user/:userId', async (req, res) => {
  try {
    const components = await Component.find({ userId: req.params.userId })
      .sort({ createdAt: -1 });
    res.json(components);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/components', async (req, res) => {
  try {
    const { userId, name, type, category, html, css } = req.body;
    
    const component = new Component({
      userId,
      name,
      type,
      category,
      html,
      css
    });

    await component.save();
    res.status(201).json(component);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/components/:componentId', async (req, res) => {
  try {
    const { name, html, css } = req.body;
    const component = await Component.findByIdAndUpdate(
      req.params.componentId,
      { name, html, css },
      { new: true }
    );
    
    res.json(component);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/components/:componentId', async (req, res) => {
  try {
    await Component.findByIdAndDelete(req.params.componentId);
    res.json({ message: 'Component deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== START SERVER ====================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});