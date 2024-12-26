import { MongoClient } from 'mongodb';

let cachedClient = null;

export async function connectToDatabase() {
  if (!cachedClient) {
    const uri = process.env.MONGODB_URI; // Add this in your .env file
    const client = new MongoClient(uri);

    await client.connect();
    cachedClient = client.db('myDatabase'); // Replace 'myDatabase' with your DB name
  }

  return cachedClient;
}
