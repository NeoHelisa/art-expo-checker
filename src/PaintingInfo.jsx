import React from 'react';

const PaintingInfo = ({ painting, onBack }) => {
  return (
    <div className="painting-info">
      <p>Country: {painting.country}</p>
      <p>Artist: {painting.artist}</p>
      <p>Title: {painting.title}</p>
      <p>Owner: {painting.owner}</p>
      <img src={painting.image} alt={painting.title} />
      <p>Status: {painting.status}</p>
      <h3>Thank you!</h3>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default PaintingInfo;
