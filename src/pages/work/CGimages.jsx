// src/pages/work/CGImages.jsx

import React from 'react';
import WorkSection from '../../components/worksection';

const CGimages = () => {
  const bucketName = 'paikar_portfolio_website_md'; // Your bucket name
  const folderPath = 'CGI_images'; // Your folder name

  return <WorkSection bucketName={bucketName} folderPath={folderPath} />;
};

export default CGimages;
