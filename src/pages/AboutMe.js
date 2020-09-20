import React from 'react';
import ExternalLink from "../components/ExternalLink";

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <p>I am Toby Ueno, a 17-year-old high school student who has taken up coding as a hobby.</p>
        <p>
          I wrote my first line of code a year ago as part of a Computer Science course, but since then I've
          learned a lot and grown significantly as a programmer.
        </p>
        <p>The programming languages I know are Python, JavaScript, and Java, in order of familiarity.</p>
        <p>I also have experience with HTML and CSS.</p>
        <p>
          Some of my favorite libraries to work with are Selenium, React, and pandas.
        </p>
      </div>
      <div>
        <h1>Contact</h1>
        <p>If you would like to reach out to me, feel free to do so at the following locations:</p>
        <p>Email: <ExternalLink href="mailto:tobyueno@gmail.com">tobyueno@gmail.com</ExternalLink></p>
        <p>Github: <ExternalLink href="https://github.com/uenot/">uenot</ExternalLink></p>
      </div>
    </div>
  );
};

export default AboutMe;