import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => (
    <div className="content-container">
        404 - <Link to="/dashboard">Go home</Link>
    </div>
);

export default NotFoundPage;