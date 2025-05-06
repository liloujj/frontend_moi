import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoURI = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/deepvisionlab';
  console.log(`Uril :${mongoURI}`)
  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000 ,
    });

    console.log('✅ MongoDB connecté avec succès !');
  } catch (error) {
    console.error('❌ Échec de la connexion à MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
