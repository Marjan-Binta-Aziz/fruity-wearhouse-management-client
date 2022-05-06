import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            {/*<!-- banner --> */}
            <section className="banner_main pb-2">
               <div className="container">
                  <div className="row d_flex">
                     <div className="col-md-6 mt-4">
                           <h1 className='pt-4'>Fruity Inventory</h1>
                        <div className="text-bg text-start ms-5">
                           <span>We are work since 1995</span>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                           <button className=''>Read More</button>
                     </div>
                     <div className="col-md-6 ">
                        <div className="text-img ms-auto">
                           <img className='w-100' src= 'https://i.ibb.co/Lzv5z36/web.png' />
                        </div>
                     </div>
                  </div>
               </div>
            </section>
        </div>
    );
};

export default Banner;