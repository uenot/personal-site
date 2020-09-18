import React from 'react';
import {Link} from "react-router-dom";

const Home = ({windowDims}) => {

  const homenavElementInfo = [
    {'text': 'About Me',
    'link': '/about'},
    {'text': 'Projects',
    'link': '/projects'},
    {'text': 'About the Site',
    'link': '/site'}
  ];

  let homenavStyle = {};
  let homenavAnchorStyle = {};

  if (windowDims[0] >= 700) {
    // normal size
    homenavAnchorStyle = {
      width: 100 / homenavElementInfo.length + "%"
    };
  } else {
    // small size
    homenavStyle = {
      flexDirection: 'column'
    };
  }

  const homenavElements = homenavElementInfo.map(element => {
    return <Link to={element.link} style={homenavAnchorStyle}>{element.text}</Link>
  });

  return (
    <div className="home">
      <h1 className="hometitle">{windowDims[0]} by {windowDims[1]}</h1>
      <div className="homenav" style={homenavStyle}>
        {homenavElements}
      </div>
    </div>
  );
}

export default Home;