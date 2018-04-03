import React from 'react';
import Slide from './Sections/Slide';
import Listproduct from './Products/index';

const Home = (props) => {
    return (
        <div className="home">
            <Slide />
            <Listproduct />
        </div>
    );
};

export default Home;