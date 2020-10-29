import React from 'react';
import InternalLink from "../components/InternalLink";
import pages from "../pages";

const Home = ({windowDims}) => {

  const homenavElementInfo = pages.filter(item => item.component !== this);

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
    return <InternalLink to={element.path} style={homenavAnchorStyle}>{element.text}</InternalLink>
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