import logistixLogo from "../imgs/logistix-logo.png";
import "../css/header.css";
import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <div className="header-div1">
          <a href="/">
            <img src={logistixLogo} alt="Logistix Logo" />
            <div>Logistix</div>
          </a>
        </div>
        <div className="header-div2">
          <a href="#download" id="nav-download">download</a>
          <a href="#dispatchers" id="nav-dispatchers">for dispatchers</a>
          <a href="/" id="nav-blog">blog</a>
          <a href="/"><button>Get Started</button></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;