import React from 'react';
import Inventories from '../../Inventories/Inventories';
import Banner from '../Banner/Banner';
import SummerOffer from '../SummerOffer/SummerOffer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <SummerOffer></SummerOffer>
        </div>
    );
};

export default Home;