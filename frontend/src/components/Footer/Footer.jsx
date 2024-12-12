import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <h5>Links</h5>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-address">
                    <h5>Our Address</h5>
                    <address>
                        GeeksforGeeks, Sector-137<br />
                        Noida, Uttar Pradesh<br />
                        India<br />
                        <div><i className="fa fa-phone"></i> +91 1234 5678</div>
                        <div><i className="fa fa-fax"></i> +91 8765 4321</div>
                        <div><i className="fa fa-envelope"></i> <a href="mailto:contactus@food.net">contactus@food.net</a></div>
                    </address>
                </div>
                <div className="footer-social">
                    <a href="http://google.com/+" target="_blank" rel="noreferrer"><i className="fa fa-google-plus"></i></a>
                    <a href="http://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                    <a href="http://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                    <a href="http://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                    <a href="http://youtube.com/" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a>
                    <a href="mailto:contactus@food.net"><i className="fa fa-envelope-o"></i></a>
                </div>
            </div>
                 <br /><br />
                 
                <div className="footer-copyright">
                    <p>© Copyright 2024 Indian Restaurant</p>
                </div>
        </div>
    );
}

export default Footer;
