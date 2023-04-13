import React from 'react';
import './Footer.css';


function Footer() {
  return (
      <footer className="footer">
          <div className="footer-col">
              <h3>HELP</h3>
              <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">CONTACT US</a></li>
                  <li><a href="#">CANCEL ORDER</a></li>
              </ul>
          </div>
          <div className="footer-col">
              <h3>ACCOUNT</h3>
              <ul>
                  <li><a href="#">ACCOUNT</a></li>
                  <li><a href="#">ORDER HISTORY</a></li>
                  <li><a href="#">PRIVACY NOTICE</a></li>
              </ul>
          </div>
          <div className="footer-col">
              <h3>NEED HELP?</h3>
              <ul>
                  <li><a href="#">support@lakmeindia.com</a></li>
                  <li><a href="#">1800-313-9293</a></li>
                  <li><a href="#">Chat with us on WhatsApp</a></li>
              </ul>
          </div>
          <div className="footer-col">
              <h3>CUSTOMER SERVICE</h3>
              <ul>
                  <li><a href="#">Shipping Policy</a></li>
                  <li><a href="#">Replacement & Refunds</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
              </ul>
          </div>
      </footer>

  );
}

export default Footer;
