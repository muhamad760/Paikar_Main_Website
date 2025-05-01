// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import './home.css';
import WorkSection from '../components/worksection';

const Home = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 4000); // Text disappears after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-wrapper">
      {/* Fullscreen video */}
      <div className="video-container">
        <video className="fullscreen-video" autoPlay muted loop playsInline>
          <source src="/videos/Home_page_intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showText && <div className="intro-text">Crafting visual stories</div>}
      </div>
       {/* Added text section */}
       <div className="intro-description">
        <p>Paikar specializes in CGI, photography, and architectural movies, collaborating with world-renowned architects, designers, and brands.</p>
      </div>

      <div className="worksection-container">
        <WorkSection
          bucketName="paikar_portfolio_website_md"
          folderPath="Home_Page"
        />
      </div>
    </div>
  );
};

export default Home;
