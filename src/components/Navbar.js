import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">About</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;