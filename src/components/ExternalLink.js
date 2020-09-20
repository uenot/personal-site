import React from 'react';

const ExternalLink = (props) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer"/>
  );
};

export default ExternalLink;