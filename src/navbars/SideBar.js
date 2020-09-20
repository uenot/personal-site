import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="header">
      <h2 className="center">Contents</h2>
      <ul className="ulnav">
        <Link to="/" onClick={window.scrollTo(0, 0)} >Home</Link>
        <Link to="/about" onClick={window.scrollTo(0, 0)} >About Me</Link>
        <Link to="/projects" onClick={window.scrollTo(0, 0)} >Projects</Link>
        <Link to="/site" onClick={window.scrollTo(0, 0)} >About the Site</Link>
      </ul>
    </div>
  );
}

export default SideBar;