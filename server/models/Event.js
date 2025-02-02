import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    googleFormLink: {
      type: String,
      required: false, // Optional, as not every event might have a Google Form link
      match: /^(https?:\/\/)?([\w-]+)+([\w-\/])+/i, // Optional: add regex validation for a URL if required
    },
    registrationStatus: {
      type: String,
      enum: ['open', 'closed'],
      default: 'closed',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

const Event = mongoose.model('Event', eventSchema);

export default Event;
