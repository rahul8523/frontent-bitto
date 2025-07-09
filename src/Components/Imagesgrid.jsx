// Imagesgrid.jsx
import React from 'react';

const Imagesgrid = ({ images = [] }) => {
  return (
    <div className="row">
      {images.map((img, index) => (
        <div key={index} className="col-md-3 mb-4">
          <img
            src={`https://admin.mockup4clients.com/${img.image_path}`}
            alt={`Gallery ${index}`}
            className="img-fluid rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default Imagesgrid;
