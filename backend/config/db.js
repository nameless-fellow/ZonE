import mongoose from 'mongoose'

export default async function connectDB(uri) {
  try {
    if (!uri) {
      console.warn('⚠️  No MONGO_URI provided. Skipping DB connection.')
      return
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    })

    console.log('✅ MongoDB connected successfully')
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  }
}
