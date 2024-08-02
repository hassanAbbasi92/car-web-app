import React, { useState } from 'react';
import './CarSearchForm.css'; // Import the CSS file for styling

function CarSearchForm({ onSearch }) {
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');
  const [velocity, setVelocity] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      length: length || '',
      weight: weight || '',
      velocity: velocity || '',
      color: color || '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="car-search-form">
      <label>
        Length:
        <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
      </label>
      <label>
        Weight:
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <label>
        Velocity:
        <input type="number" value={velocity} onChange={(e) => setVelocity(e.target.value)} />
      </label>
      <label>
        Color:
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default CarSearchForm;
