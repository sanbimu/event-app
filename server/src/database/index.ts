import mongoose from 'mongoose';

export async function createDatabaseConnection() {
  const url = import.meta.env.VITE_DATABASE_URL;
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(url);
  } catch (e) {
    console.error(e);
  }
}
