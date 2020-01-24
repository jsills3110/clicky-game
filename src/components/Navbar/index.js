import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span class="navbar-brand mb-0 h1">Clicky Game!</span>
                </li>
                <li className="nav-item">
                    <span class="navbar-brand mb-0 h1">{props.winOrLose}</span>
                </li>
                <li className="nav-item">
                    <span class="navbar-brand mb-0 h1">{props.score}</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;