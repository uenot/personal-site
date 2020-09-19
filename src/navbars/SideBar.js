import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="header">
      <h2 className="center">Contents</h2>
      <ul className="ulnav">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/site">About the Site</Link>
      </ul>
    </div>
  );
}

export default SideBar;