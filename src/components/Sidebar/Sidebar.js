import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <Link to="/admin"><li>Make Admin</li></Link>
                <Link to="/addNews"><li>Add News</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;