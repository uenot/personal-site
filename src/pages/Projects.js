import React from 'react';
import {Link} from "react-router-dom";

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
        <h2><a href="https://github.com/uenot/auto-ff" target="_blank" rel="noopener noreferrer">Auto-FF</a></h2>
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
        <h2><a href="https://github.com/uenot/nocturne-ts" target="_blank" rel="noopener noreferrer">NocturneTS</a></h2>
        <p>
          NocturneTS is a full text-based recreation of the turn-based combat found in the 2003 video
          game <a href="https://en.wikipedia.org/wiki/Shin_Megami_Tensei_III:_Nocturne"
             target="_blank" rel="noopener noreferrer">Shin Megami Tensei: Nocturne</a>.
          The program features multiple game modes that involve user input and a fully-automated "experiment mode"
          that can simulate thousands of games with custom settings.
        </p>
        <p>
          This project was written in Python. It has no major dependencies— the only one of
          note is the FuzzyWuzzy library for handling imprecise user input.
        </p>
      </div>
      <div className="project">
        <h2><Link to="/site">This Website</Link></h2>
        <p>See the dedicated "<Link to="/site">About the Site</Link>" page for more info.</p>
      </div>
      <div className="project">
        <h2>
          <a href="https://github.com/uenot/oneline-hangman" target="_blank" rel="noopener noreferrer">
            Oneline Hangman
          </a>
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