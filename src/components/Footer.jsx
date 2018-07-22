import React from 'react';

const Footer = () => (
  <div className="wrapper">
    <div className="footer-container">
      <div className="about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          dolore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          consequat.
        </p>
      </div>
      <div className="navigation">
        <h2> Navigatoin</h2>
        <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="/beauty">Beauty</a>
        </p>
        <p>
          <a href="/restaurants">Restaurants</a>
        </p>
        <p>
          <a href="/clothes">Clothes</a>
        </p>
        <p>
          <a href="/sport">Sport</a>
        </p>
        <p>
          <a href="/tech">Tech</a>
        </p>
        <p>
          <a href="/auto">Auto</a>
        </p>
      </div>
      <div className="social">
        <h2>Social</h2>
        <p>
          <a href="https://www.facebook.com/">Facebook</a>
        </p>
        <p>
          <a href="https://www.instagram.com/">Instagram</a>
        </p>
        <p>
          <a href="https://www.twitter.com/">Twitter</a>
        </p>
        <p>
          <a href="https://plus.google.com">Google+</a>
        </p>
      </div>
    </div>
    <p className="center">&copy; 2018 All rights reserved. Designed by Smart Investments Team :)</p>
  </div>
);

export default Footer;
