import React, { useState, useEffect } from 'react';
import './App.css';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Site from "./pages/Site";
import SideBar from "./navbars/SideBar.js";
import BottomBar from "./navbars/BottomBar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const windowDims = [windowWidth, windowHeight];

  const updateDimensions = () => {
    let newWindowWidth;
    let newWindowHeight;
    if (typeof window == 'undefined') {
      newWindowWidth = 0;
      newWindowHeight = 0;
    } else {
      newWindowWidth = window.innerWidth;
      newWindowHeight = window.innerHeight;
    }
    setWindowWidth(newWindowWidth);
    setWindowHeight(newWindowHeight);
  }

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    }
  });

  const bodyStyle = {};
  let gradientOrientation = '90deg';

  let navbar = <SideBar />

  if (windowWidth < 700) {
    gradientOrientation = '180deg';
    bodyStyle['width'] = '100%';
    bodyStyle['minHeight'] = '90vh';
    bodyStyle['marginBottom'] = '10vh';
    navbar = <BottomBar />
  }

  bodyStyle['background'] = `linear-gradient(${gradientOrientation}, #141b41, 90%, #6f9ceb);`
  bodyStyle['background'] = 'linear-gradient(0deg, #6f9ceb, #141b41 10vh)'

  const pageInfo = [
    {'component': Home,
    'path': '/',
    'exact': true},
    {'component': AboutMe,
    'path': '/about',
    'exact': false},
    {'component': Projects,
    'path': '/projects',
    'exact': false},
    {'component': Site,
    'path': '/site',
    'exact': false}
    ];

  const pages = pageInfo.map(page => {
    return <Route exact={page.exact} path={page.path} render={props => React.createElement(
      page.component, {...props, windowDims: windowDims}
    )} />
  });

  return (
    <BrowserRouter>
      <div className="app">
        <div className="body" style={bodyStyle}>
          <Switch>
            {pages}
          </Switch>
        </div>
        {navbar}
      </div>
    </BrowserRouter>
  );
}

export default App;
