import React, { useEffect, useState } from 'react';
import '../videosection.css';

const Videosection = ({ bucketName, folderPath }) => {
  const [videos, setVideos] = useState([]);
  const [popupVideo, setPopupVideo] = useState(null);
  // Store the type of video (vertical/horizontal)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://storage.googleapis.com/storage/v1/b/${bucketName}/o?prefix=${folderPath}/`
        );
        const data = await response.json();
  
        if (!data.items) {
          console.warn('No items found in response:', data);
          return;
        }
  
        const videoFiles = data.items.filter(item =>
          item.name.endsWith('.mp4') || item.name.endsWith('.mov')
        );
        setVideos(videoFiles);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
  
    fetchVideos();
  }, [bucketName, folderPath]);

  const handleVideoClick = (videoUrl) => {
    const video = document.createElement('video');
    video.src = videoUrl;
    
    video.onloadedmetadata = () => {
      const isVertical = video.videoHeight > video.videoWidth;
      setPopupVideo({ videoUrl, isVertical });
    };
  };

  const closePopup = () => {
    setPopupVideo(null);
  };

  return (
    <div className="video-section">
      {videos.map((video, index) => {
        const videoUrl = `https://storage.googleapis.com/${bucketName}/${video.name}`;
        const fileName = decodeURIComponent(video.name.split('/').pop().split('.').slice(0, -1).join('.').replace(/[-\d]+/g, '').trim());



        return (
          <div
            key={video.name}
            className={`video-card ${index % 2 === 0 ? 'right-video' : 'left-video'}`}
          >
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="video-preview"
              onClick={() => handleVideoClick(videoUrl)}
            />
            <div className="video-name">{fileName}</div>
          </div>
        );
      })}

{popupVideo && (
  <div className="video-popup-overlay" onClick={closePopup}>
    <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
      <video
        src={popupVideo.videoUrl}
        controls
        autoPlay
        className={`video-popup-player ${popupVideo.isVertical ? 'vertical' : ''}`}
      />
    </div>
  </div>
)}
    </div>
  );
};

export default Videosection;
