import React from 'react';

function CarList({ cars }) {
  return (
    <div>
      <h2>Car Results</h2>
      {cars.length === 0 ? (
        <p>No cars found</p>
      ) : (
        <ul>
          {cars.map((car, index) => (
            <li key={index}>
              Length: {car.length}, Weight: {car.weight}, Velocity: {car.velocity}, Color: {car.color}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarList;