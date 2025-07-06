// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

type Data = {
  name?: string;
  message?: string;
  collections?: unknown[];
  error?: string;
  insertResult?: unknown;
};

const uri = 'mongodb+srv://nomooveganapp:LmgPnBhCRnmfpDCv@cluster0.3qcovqo.mongodb.net/NomooLanding?retryWrites=true&w=majority&appName=Cluster0';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('NomooLanding');
    // Insert a test email to verify connection
    const testEmail = 'test@example.com';
    const insertResult = await db.collection('wishlistUsers').insertOne({ email: testEmail, createdAt: new Date() });
    // Example: list collections
    const collections: unknown[] = await db.listCollections().toArray();
    await client.close();
    res.status(200).json({ message: 'Connected to MongoDB!', collections, insertResult });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}
