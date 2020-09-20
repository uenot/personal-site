import React from 'react';
import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";

const Projects = () => {
  return (
    <div>
      <div className="project-header">
        <h1>Projects</h1>
        <p>
          Listed here are my completed or in-progress projects, big and small. Check out the linked GitHub repos for
          the code and more info on each project.
        </p>
      </div>
      <div className="project">
        <h2><ExternalLink href="https://github.com/uenot/auto-ff">Auto-FF</ExternalLink></h2>
        <p>
          This collection of scripts was written to manage Yahoo fantasy football teams. It can draft a team based
          on custom or pre-determined rankings and dynamic position weighting, and it can automatically send, parse,
          and accept or reject trades.
        </p>
        <p>
          The project was written in Python, and features Selenium to navigate and manipulate the website.
          Other libraries used include BeautifulSoup for web scraping and pandas for data analysis.
        </p>
      </div>
      <div className="project">
        <h2><ExternalLink href="https://github.com/uenot/nocturne-ts">NocturneTS</ExternalLink></h2>
        <p>
          NocturneTS is a full text-based recreation of the turn-based combat found in the 2003 video
          game <ExternalLink href="https://en.wikipedia.org/wiki/Shin_Megami_Tensei_III:_Nocturne">Shin
          Megami Tensei: Nocturne</ExternalLink>.
          The program features multiple game modes that involve user input and a fully-automated "experiment mode"
          that can simulate thousands of games with custom settings.
        </p>
        <p>
          This project was written in Python. It has no major dependencies— the only one of
          note is the FuzzyWuzzy library for handling imprecise user input.
        </p>
      </div>
      <div className="project">
        <h2><InternalLink to="/site">This Website</InternalLink></h2>
        <p>See the dedicated "<InternalLink to="/site">About the Site</InternalLink>" page for more info.</p>
      </div>
      <div className="project">
        <h2>
          <ExternalLink href="https://github.com/uenot/oneline-hangman">Oneline Hangman</ExternalLink>
        </h2>
        <p>
          This short project is a simple command-line based game of Hangman. It was written in one (long) line of code
          and served as an exercise in working with complex anonymous functions.
        </p>
        <p>
          This line of code was written in Python, and has no major dependencies. If run on Windows, requires the
          requests library to fetch a word bank.
        </p>
      </div>
    </div>
  );
};

export default Projects;