import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
    <footer className="footer">
        <div className="content-container">
            <div className="footer__content">
                <Link className="button button--link" to="/">
                   Home
                </Link>
                <Link className="button button--link" to="/privacy-policy">
                    Privacy Policy
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;