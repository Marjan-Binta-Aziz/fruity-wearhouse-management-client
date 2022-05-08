import React from 'react';
import Inventories from '../../Inventories/Inventories';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import SummerOffer from '../SummerOffer/SummerOffer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <SummerOffer></SummerOffer>
            <Contact></Contact>
        </div>
    );
};

export default Home;