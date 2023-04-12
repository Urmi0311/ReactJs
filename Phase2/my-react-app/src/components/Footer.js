import React from 'react';
import './Footer.css';

function Footer() {
  return (
      <footer className="footer">
          <div className="footer-col">
              <h3>GET TO KNOW US</h3>
              <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press Releases</a></li>
              </ul>
          </div>
          <div className="footer-col">
              <h3>CONNECT WITH US</h3>
              <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
              </ul>
          </div>
          <div className="footer-col">
              <h3>CONSUMER POLICY</h3>
              <ul>
                  <li><a href="#">Return Policy</a></li>
                  <li><a href="#">Terms Of Use</a></li>
                  <li><a href="#">Security</a></li>
              </ul>
          </div>
          <div className="footer-col">
              <h3>HELP</h3>
              <ul>
                  <li><a href="#">Payments</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Returns</a></li>
              </ul>
          </div>
      </footer>

  );
}

export default Footer;
