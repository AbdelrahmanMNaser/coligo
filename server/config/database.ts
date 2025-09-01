import mongoose from 'mongoose';

const MONGO_URI = process.env.coligo;
if (!MONGO_URI) throw new Error('Environment variable "coligo" (MongoDB URI) is not defined.');

export async function connectDB(): Promise<void> {
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