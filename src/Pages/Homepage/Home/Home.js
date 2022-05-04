import React from 'react';
import Inventories from '../../Inventories/Inventories';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
        </div>
    );
};

export default Home;