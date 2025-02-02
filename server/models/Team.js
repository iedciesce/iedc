import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    default: 0  // 2 for high priority members, 1 for normal members
  },
  social: {
    linkedin: String,
    twitter: String,
    github: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Team', teamSchema);