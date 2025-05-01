
import React from 'react';
import '../style.css';

const about = () => {
  return (
    <div className="about-wrapper">
      <div className="about-video">
        <video autoPlay muted loop playsInline>
          <source src="/videos/0010_v01_f 2 (1).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about-text">
        <h2>Who We Are</h2>
        <p>
          We are CGI artists, architects, designers and marketers. We are crafting visual stories to help our clients' visions become reality.
        </p>
      </div>
    </div>
  );
};

export default about;
