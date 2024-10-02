import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, index: true, unique: true },
  profilePic: { type: String },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// const accountsSchema = new mongoose.Schema({
//   userId: { type: String, unique: true, required: true },
//   twoFaEnabled: { type: Boolean },
//   notificationPreferences: { type: JSON },
//   userPreferences: { type: JSON },
//   roleId: { type: String, required: true },
//   bankDetails: { type: JSON },
//   //   orderHistory:
//   // lastLoginDetails:
//   //
// });

export const User = new mongoose.model('Users', userSchema);
