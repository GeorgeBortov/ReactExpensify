import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = ({ startLogout }) => (
    <header className="footer">
        <div className="content-container">
            <div className="footer__content">
                <Link className="header_link" to="/">
                   Go home
                </Link>
                <Link className="header_link" to="/privacy-policy">
                    Privacy Policy
                </Link>
            </div>
        </div>
    </header>
);

export default Footer;