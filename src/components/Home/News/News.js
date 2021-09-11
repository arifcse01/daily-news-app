import React, { useEffect, useState } from 'react';
import NewsDetails from '../NewsDetails/NewsDetails';

const News = () => {
    const [newNews, setNewNews] = useState([]);

    useEffect(() =>{
        fetch('https://infinite-badlands-26731.herokuapp.com/allNews')
        .then(res => res.json())
        .then(data => setNewNews(data))        
    }, [])


    return (
        <div className="container-fluid">
            <div className="row">
                <h2 className="text-center mt-4">Latest News</h2>
                {
                    newNews.map(news => <NewsDetails news = {news} key = {news._id}></NewsDetails>)
                }
            </div>            
        </div>
    );
};

export default News;