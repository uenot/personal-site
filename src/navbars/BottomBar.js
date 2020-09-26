import React from 'react';
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Site from "../pages/Site";
import InternalLink from "../components/InternalLink";

const BottomBar = () => {

  const pageInfo = [
    {'component': Home,
      'path': '/',
      'text': 'Home'},
    {'component': AboutMe,
      'path': '/about',
      'text': 'About Me'},
    {'component': Projects,
      'path': '/projects',
      'text': 'Projects'},
    {'component': Site,
      'path': '/site',
      'text': 'About the Site'}
  ];

  const links = pageInfo.map(page => {
    return <InternalLink to={page.path}
                         key={page.path}
                         style={{width: 100 / pageInfo.length + '%', fontSize: 16}}>{page.text}</InternalLink>
  });

  return (
    <div className="bottom-header">
      <div className="bottom-nav">
        {links}
      </div>
    </div>
  );
};

export default BottomBar;