import React from 'react';
import './SummerOffer.css'
const SummerOffer = () => {
    return (
        <div>
        <section className="banner">
 <h1>Our Categories</h1>
<div className="grid-banner">
    <div className="grid">
        <img src="https://i.ibb.co/1qDFg0H/summer.webp" alt=""/>
        <div className="content">
            <span>Fresh Fruits</span>
            <h3></h3>
            <a href="#" className="btn">See Deatils</a>
        </div>
    </div>
    <div className="grid">
        <img src="https://i.ibb.co/gMc5r1J/dry.jpg" alt=""/>
        <div className="content center pt-5">
            <span>Dry Fruits</span>
            <h3></h3>
            <a href="#" className="btn">See Deatils</a>
        </div>
    </div>
    <div className="grid">        
        <img src="https://i.ibb.co/KGbP87b/organic.webp" alt=""/>
        <div className="content">
            <span>Organic Fruits</span>
            <h3></h3>
            <a href="#" className="btn">See Details</a>
        </div>
    </div>
</div>

</section>

        </div>
    );
};

export default SummerOffer;