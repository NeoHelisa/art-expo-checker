import React from 'react';

const PaintingInfo = ({ painting, onBack }) => {
  const statusColor = painting.status === "Qualified" ? "green" : "red";

  return (
    <div className="painting-info">
      <div className='background'>
      </div>
      <div className='content'>
        <div className='info-wrapper'>
          <div className='details'>
            <p>Country: <span>{painting.country}</span></p>
            <p>Artist: <span>{painting.artist}</span></p>
            <p>Title: <span>{painting.title}</span></p>
            <p>Owner: <span>{painting.owner}</span></p>
            <p>Status: <span style={{ color: statusColor, fontWeight: 'bold' }}>{painting.status}</span></p>
            <h3>Thank you!</h3>
          </div>
          <div className='img-wrapper'>
            <img src={painting.image} alt={painting.title} />
          </div>
        </div>
        <button onClick={onBack}><span className="text">Back</span></button>
      </div>
    </div>
  );
};

export default PaintingInfo;
