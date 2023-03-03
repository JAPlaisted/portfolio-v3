import React from 'react';
import { HashLink } from 'react-router-hash-link';

function NavBar(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item"><HashLink className="nav-link" to="/#top">J</HashLink></li>
        <li className="nav-item"><HashLink className="nav-link" to="/#projects">Projects</HashLink></li>
        <li className="nav-item"><HashLink className="nav-link" to="/#skills">Skills</HashLink></li>
      </ul>
    </nav>
    );
}

export default NavBar;