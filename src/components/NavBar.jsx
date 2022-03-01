import React from "react";
import { Link } from 'react-router-dom';

function NavBar(props) {
  return <ul className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark justify-content-center">
  <li className="nav-item">
    <Link className="nav-link" aria-current="page" to="/">Board</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/addItem">Add Task</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Archive">Archive</Link>
  </li>

</ul>;
}

export default NavBar;
