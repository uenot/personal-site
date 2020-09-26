import React from 'react';

const ExternalLink = (props) => {
  const newProps = {...props};
  if ('redirect' in props) {
    newProps.redirect = "true";
    newProps.target = "_blank";
    newProps.rel = "noopener noreferrer";
  }
  return (
    <a {...newProps} />
  );
};

export default ExternalLink;