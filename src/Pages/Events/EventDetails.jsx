// EventDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Imagesgrid from '../../Components/Imagesgrid';

const EventDetails = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get('https://admin.mockup4clients.com/api/galleries')
      .then(response => {
        if (response.data.status) {
          const found = response.data.data.find((e) => e.slug === slug);
          setEvent(found);
        }
      })
      .catch(error => {
        console.error('Error fetching event:', error);
      });
  }, [slug]);

  if (!event) {
    return <div className="container py-5"><h2>Event Not Found</h2></div>;
  }

  return (
    <>
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

      <div className="container py-5">
        <h1>{event.title}</h1>
        <Imagesgrid images={event.images} />
      </div>
    </>
  );
};

export default EventDetails;
