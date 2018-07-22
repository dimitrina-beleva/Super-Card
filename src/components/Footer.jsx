import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="footer-about">
        <h2>About</h2>
        <p>
          SuperCard is a card, that entitles the holder to discounts on the prices of some products or services. Cards
          may be issued as part of a loyalty program and may be offered by clubs or associations who negotiate on behalf
          of all members to obtain benefits.
        </p>
      </div>
      <div className="footer-navigation">
        <h2> Navigation</h2>
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/beauty">Beauty</a>
          </li>
          <li>
            <a href="/restaurants">Restaurants</a>
          </li>
          <li>
            <a href="/clothes">Clothes</a>
          </li>
          <li>
            <a href="/sport">Sport</a>
          </li>
          <li>
            <a href="/tech">Tech</a>
          </li>
          <li>
            <a href="/auto">Auto</a>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <h2>Social</h2>
        <ul className="footer-links">
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li>
            <a href="https://www.twitter.com/">Twitter</a>
          </li>
          <li>
            <a href="https://plus.google.com">Google+</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="copyright">&copy; 2018 All rights reserved. Designed by Smart Investments Team :)</div>
  </div>
);

export default Footer;
