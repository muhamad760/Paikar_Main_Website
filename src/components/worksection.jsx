import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../worksection.css';

const WorkSection = ({ bucketName, folderPath }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // <-- Added for popup

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://storage.googleapis.com/storage/v1/b/${bucketName}/o?prefix=${folderPath}/`
        );
  
        let imageList = response.data.items;
  
        // Sort the files by their numeric prefix (like 01-, 02-, etc.)
        imageList.sort((a, b) => {
          const getNumberPrefix = (name) => {
            const filename = name.split('/').pop(); // "01-image.jpg"
            const match = filename.match(/^(\d+)/); // ["01", "01"]
            return match ? parseInt(match[1], 10) : 0;
          };
  
          return getNumberPrefix(a.name) - getNumberPrefix(b.name);
        });
  
        setImages(imageList);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    fetchImages();
  }, [bucketName, folderPath]);
  
  const getCleanName = (name) => {
    // Remove folder path first
    const filename = name.split('/').pop();
    // Remove numbers and dash at start (like "01-")
    const withoutNumber = filename.replace(/^\d+\s*[-]\s*/, '');
    // Remove file extension (.jpg, .png, etc.)
    const withoutExtension = withoutNumber.replace(/\.[^/.]+$/, '');
    return withoutExtension;
  };

  return (
    <div className="work-section">
      <div className="masonry-grid">
        {images.map((image) => (
          <div key={image.id} className="masonry-item" onClick={() => setSelectedImage(image)}>
            <img
              src={`https://storage.googleapis.com/${bucketName}/${image.name}`}
              alt={getCleanName(image.name)}
              className="work-image"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={`https://storage.googleapis.com/${bucketName}/${selectedImage.name}`}
              alt={getCleanName(selectedImage.name)}
              className="popup-image"
            />
            <div className="popup-name">{getCleanName(selectedImage.name)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSection;
