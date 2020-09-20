import React from 'react';
import InternalLink from "../components/InternalLink";

const SideBar = () => {
  return (
    <div className="header">
      <h2 className="center">Contents</h2>
      <ul className="ulnav">
        <InternalLink to="/">Home</InternalLink>
        <InternalLink to="/about">About Me</InternalLink>
        <InternalLink to="/projects">Projects</InternalLink>
        <InternalLink to="/site">About the Site</InternalLink>
      </ul>
    </div>
  );
}

export default SideBar;