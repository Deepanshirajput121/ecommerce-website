import { connectToDatabase } from '../../utils/db'; // Replace this with your database connection logic

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, email, password } = req.body;

      // Basic validation (optional but recommended)
      if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Database connection and user creation logic
      const db = await connectToDatabase();
      const usersCollection = db.collection('users'); // Replace 'users' with your collection name

      const existingUser = await usersCollection.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' }); // Conflict
      }

      const newUser = { username, email, password }; // Hash password before saving
      const result = await usersCollection.insertOne(newUser);

      res.status(201).json({ message: 'Signup successful!', userId: result.insertedId });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
