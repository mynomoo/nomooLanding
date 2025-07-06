import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://nomooveganapp:LmgPnBhCRnmfpDCv@cluster0.3qcovqo.mongodb.net/NomooLanding?retryWrites=true&w=majority&appName=Cluster0';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Only allow admin query
    if (req.query.admin === '1') {
      try {
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db('NomooLanding');
        const users = await db.collection('wishlistUsers')
          .find({}, { projection: { _id: 0 } })
          .sort({ createdAt: -1 })
          .toArray();
        await client.close();
        return res.status(200).json({ success: true, users });
      } catch (error: any) {
        return res.status(500).json({ error: error.message });
      }
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source } = req.body;
  if (!email || typeof email !== 'string' || !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  if (!source || typeof source !== 'string') {
    return res.status(400).json({ error: 'Invalid source' });
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('NomooLanding');
    const collection = db.collection('wishlistUsers');
    // Ensure unique index on email
    await collection.createIndex({ email: 1 }, { unique: true });
    // Try to insert
    const doc = { email, source, createdAt: new Date() };
    const result = await collection.insertOne(doc);
    await client.close();
    res.status(200).json({ success: true, insertedId: result.insertedId });
  } catch (error: any) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(409).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: error.message });
  }
}

async function submitEmailToWishlist(email: string, source: string) {
  const res = await fetch('/api/wishlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source }),
  });
  return res.json();
} 