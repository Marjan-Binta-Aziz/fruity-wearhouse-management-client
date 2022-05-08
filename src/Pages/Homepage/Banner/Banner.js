import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            {/*<!-- banner --> */}
            <section className="banner_main pb-2">
               <div className="container">
                  <div className="row d_flex">
                     <div className="col-md-6 col-12">
                           <h1 className='pt-4'>Fruity Inventory</h1>
                        <div className="text-bg text-start ms-5 mb-5">
                           <span>We are work since 1995</span>
                           <p>Any fruit or 100% fruit juice counts as part of the Fruit Group. Fruits may be fresh, frozen, canned, or dried/dehydrated, and may be whole, cut-up, pureed, or cooked. At least half of the recommended amount of fruit should come from whole fruit, rather than 100% fruit juice .</p>
                        </div>
                     </div>
                     <div className="col-md-6 col-12">
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