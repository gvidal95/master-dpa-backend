// src/config/database.ts
import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  const MONGO_URI = 'mongodb+srv://gabrielwv1095_db_user:U4z0fL80oNlXljXN@cluster0.zqeohap.mongodb.net/?appName=Cluster0';
  try {
    await mongoose.connect(MONGO_URI);
    console.log('🔄 [Database]: Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('❌ Error crítico al conectar a la base de datos:', error);
    process.exit(1);
  }
};
    