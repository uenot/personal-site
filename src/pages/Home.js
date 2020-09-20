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

  if (windowDims[0] >= 850) {
    // normal size
    homenavAnchorStyle = {
      width: 100 / homenavElementInfo.length + "%"
    };
  } else {
    // small size
    homenavStyle = {
      flexDirection: 'column'
    };
    homenavAnchorStyle = {
      padding: '6px'
    };
  }

  const homenavElements = homenavElementInfo.map(element => {
    return <Link to={element.link}
                 onClick={window.scrollTo(0, 0)}
                 style={homenavAnchorStyle}>{element.text}
    </Link>
  });

  return (
    <div className="home">
      <h1 className="hometitle">Toby Ueno</h1>
      <div className="homenav" style={homenavStyle}>
        {homenavElements}
      </div>
    </div>
  );
}

export default Home;