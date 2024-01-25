import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h5>About Us</h5>
            <p>I love to read, and I love to keep a log of what I read, join the club!</p>
          </div>
          <div className="footer-section">
            <h5>Contact</h5>
            <p>Email: MyLibraryLog@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/search">Search Books</a></li>
              <li><a href="/account">Account</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Library Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;