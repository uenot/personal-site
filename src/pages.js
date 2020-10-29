import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Site from "./pages/Site";

let pages = [
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
]

export default pages;