import React from 'react';
import { Link } from 'react-router-dom';

const InternalLink = (props) => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <Link {...props} onClick={scrollToTop} />
  );
};

export default InternalLink;