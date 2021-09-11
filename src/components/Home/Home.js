import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import News from './News/News';

const Home = () => {
    return (
        <div>
            <Header></Header>  
            <Banner></Banner>  
            <News></News> 
            <Footer></Footer>     
        </div>
    );
};

export default Home;