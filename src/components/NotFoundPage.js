import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const NotFoundPage = () => (
    <div className="not-found">
        <div className="content-container">
            <h1 className="page-header__title"><span>404</span> - Page Not Found</h1>
            <Link to="/dashboard" className="button">
                Go Home
            </Link>
        </div>
        <Footer />
    </div>
);

export default NotFoundPage;