import React from 'react';
import Header from '../Header/Header';
import Navber from '../Navber/Navber';
import Product from '../Products/Product';
import Sideber from '../Sideber/Sideber';
import Slide from '../Slide/Slide';

const Home = () => {
    return (
        <div>
            <Header/>
            <Navber/>
            <div className="row">
                <div className="col-md-2">
                    <Sideber/><br/>
                    <Sideber/>
                </div>
                <div className="col-md-10">
                    <Slide/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </div>
    );
};

export default Home;