import React from 'react';
import WorkSection from '../../components/worksection';

const Photography = () => {
  const bucketName = 'paikar_portfolio_website_md'; // Your bucket name
  const folderPath = 'Photograph'; // Your folder name

  return <WorkSection bucketName={bucketName} folderPath={folderPath} />;
};

export default Photography;
