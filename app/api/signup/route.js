import { connectToDatabase } from '../../../utils/mongodb';

export async function POST(req) {
    const body = await req.json(); // Request body parse karein
    const { username, email, password } = body;

    const db = await connectToDatabase();
    const result = await db.collection('users').insertOne({
        username,
        email,
        password,
    });

    if (result.insertedId) {
        return new Response(JSON.stringify({ message: 'User created successfully!' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } else {
        return new Response(JSON.stringify({ message: 'Signup failed!' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
