import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export function InitializeDB() {
  return mongoose.connect(process.env.ATLAS_URI, {
    dbName: 'gfgDb',
  });
}
