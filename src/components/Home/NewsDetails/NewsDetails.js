import React from 'react';
import { Link } from 'react-router-dom';

const NewsDetails = (props) => {
    const { img, title, category, _id} = props.news;
    return (
        <div className="col-sm-12 col-md-4 g-4 col-lg-4 ">
            <div className="shadow h-100">
                <img src={img} className="img-fluid w-100" alt="" />
                <div className="p-2">
                    <h4>{title}</h4>
                    <p>Category: {category}</p>
                    <Link to={`newsInfo/${_id}`}><button className="btn btn-info">View More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;