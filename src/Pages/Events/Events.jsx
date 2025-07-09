// Events.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Event.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://admin.mockup4clients.com/api/galleries')
      .then(response => {
        if (response.data.status) {
          setEvents(response.data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching galleries:', error);
      });
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <section className="about-img d-flex align-items-end">
        <div className="container text-white">
          <p className="fs-4 m-0 font-bnpr" style={{ marginTop: "330px" }}>
            Welcome to
          </p>
          <strong className="fs-4 font-bnpr">Bihar Internatinal Trade Organization</strong>
          <h2 className="bannerHeading" style={{ fontSize: "100px", fontWeight: 700 }}>
            Events
          </h2>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <Link to={`/events/${event.slug}`} className="text-decoration-none">
                <div className="card thumnails">
                  <img
                    className="img-fluid rounded"
                    src={`https://admin.mockup4clients.com/${event.cover_image}`}
                    alt={event.title}
                  />
                  <div className="thumText">{event.title}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
