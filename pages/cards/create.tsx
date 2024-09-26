"use client";
import { useState } from 'react';

export default function CreateCard() {
  const [playerName, setPlayerName] = useState('');
  const [team, setTeam] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to the server or API route
    // Example using fetch:
    const res = await fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify({ playerName, team, position, image, description, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={playerName} onChange={(e) => setPlayerName(e.target.value)} placeholder="Player Name" required />
      <input value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team" required />
      <input value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" required />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <button type="submit">Create Card</button>
    </form>
  );
}