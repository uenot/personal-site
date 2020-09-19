import React from 'react';

const Site = () => {
  return (
    <div>
      <h1>About the Site</h1>
      <p>
        This site was created with the goal of practicing web design.
      </p>
      <p>
        The frontend was constructed through <a href="https://reactjs.org/">ReactJS</a> and
        the <code>create-react-app</code> tool.
      </p>
      <p>
        The <code>react-router-dom</code> package was used for reload-free pages.
      </p>
      <p>
        The site was originally constructed for desktop browsers. The mobile version was implemented through a
        combination of dynamic component rendering and inline CSS styles.
      </p>
      <p>
        GitHub's Pages service was used to host the site.
      </p>
      <p>
        Through this project, I learned about React and NodeJS and gained more experience with practical
        implementations of HTML, CSS, and JavaScript.
      </p>
      <p>
        The source code for this website is
        available <a href="https://github.com/uenot/personal-site">in this GitHub repo</a>. The website is
        hosted <a href="https://github.com/uenot/uenot.github.io">in a different repository</a> which uses an
        optimized (and unreadable) version of the code.
      </p>
    </div>
  );
};

export default Site;