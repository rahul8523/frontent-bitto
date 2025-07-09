import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './BitoCard.css';

const BitoCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://admin.mockup4clients.com/api/actionpoints')
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setItems(data.data); 
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

    return (
    <Container className='py-sm-5'>
      <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>BITO Action Points</h2>
      <div className="card-grid">
        {items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.icon} alt={item.title} className="icon" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BitoCard;
