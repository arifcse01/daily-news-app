import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Daily News</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Category</a>
                        <Link class="nav-link" to="/admin">Admin</Link>
                        <Link to="/signin"><button className="btn btn-success">Signin</button></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;