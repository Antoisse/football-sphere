import { NextApiRequest, NextApiResponse } from 'next';
// Import your database connection

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Extract data from the request body
    const { playerName, team, position, image, description, content } = req.body;
    // Save to database
    // await db.collection('cards').insertOne({ playerName, team, position, image, description, content });
    res.status(201).json({ message: 'Card created successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};