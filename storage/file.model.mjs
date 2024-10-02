import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  filename: { type: String, index: true, required: true },
  createdAt: { type: Date, default: Date.now },
  size: { type: Number, default: 0 },
  path: { type: String, index: true, required: true },
});

export const Files = new mongoose.model('Files', FileSchema);
