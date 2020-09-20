import React from 'react';
import {Link} from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Site from "../pages/Site";

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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  const links = pageInfo.map(page => {
    return <Link to={page.path}
                 style={{width: 100 / pageInfo.length + '%', fontSize: 16}}
                 onClick={scrollToTop}>{page.text}</Link>
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