import React from 'react';
import pages from "../pages";
import InternalLink from "../components/InternalLink";

const SideBar = () => {

  const links = pages.map(page => {
    return <InternalLink to={page.path} key={page.path}>{page.text}</InternalLink>
  });

  return (
    <div className="header">
      <h2 className="center">Contents</h2>
      <ul className="ulnav">
        {links}
      </ul>
    </div>
  );
}

export default SideBar;