import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const NewsInfo = () => {
    const {id} = useParams();
    const [news, setNews] = useState({});

    useEffect(() =>{
        fetch(`https://infinite-badlands-26731.herokuapp.com/${id}`)
        .then(res => res.json())
        .then(data => setNews(data))
    }, [id])


    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-8 offset-md-2">
                <h4>Report By: {news.author}</h4>                    
                    <img src={news.img} className="img-fluid w-100 my-2" alt="" />
                    <h2>{news.title}</h2>                    
                    <p>{news.description}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsInfo;