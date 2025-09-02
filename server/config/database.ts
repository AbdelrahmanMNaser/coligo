import mongoose from 'mongoose';

export async function connectDB(): Promise<void> {

const MONGO_URI = process.env.DATABASE_URI;
if (!MONGO_URI) throw new Error('Environment variable "DATABASE_URI" (MongoDB URI) is not defined.');

    try {
        await mongoose.connect(MONGO_URI!, {
            // use recommended options via ConnectOptions
        } as mongoose.ConnectOptions);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
}

export async function disconnectDB(): Promise<void> {
    await mongoose.disconnect();
}