import React from 'react';

const Footer = () => {
    return (
        <section style={{ "background": "grey", "color": "white" }}>
            <div className="container-fluid">
                <div className="row py-3 mt-3">
                    <div className="col-md-4 d-flex align-items-center">
                        <h2>Daily News</h2>
                    </div>
                    <div className="col-md-4">
                        <h3>About Us</h3>
                        <p>Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <div className="d-flex justify-content-around mt-3">
                            <i class="fab fa-facebook-square fa-2x"></i>
                            <i class="fab fa-linkedin fa-2x"></i>
                            <i class="fab fa-twitter-square fa-2x"></i>
                            <i class="fab fa-facebook-messenger fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;