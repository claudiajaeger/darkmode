import React from "react";
import "../styles/_app.scss";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stuff">Stuff</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
