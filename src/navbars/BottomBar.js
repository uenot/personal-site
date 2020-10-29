import React from 'react';
import pages from "../pages";
import InternalLink from "../components/InternalLink";

const BottomBar = () => {

  const links = pages.map(page => {
    return <InternalLink to={page.path}
                         key={page.path}
                         style={{width: 100 / pages.length + '%', fontSize: 16}}>{page.text}</InternalLink>
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