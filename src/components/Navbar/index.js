import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span class="navbar-brand mb-0 h1">Clicky Game!</span>
                </li>
                <li className="nav-item">
                    <span class="navbar-brand mb-0 h1">Did you win or lose</span>
                </li>
                <li className="nav-item">
                    <span class="navbar-brand mb-0 h1">Score goes here</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;