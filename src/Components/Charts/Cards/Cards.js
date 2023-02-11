import React from 'react';
import pic1 from '../../../images/pic1.jpg'

const Cards = () => {
    return (
        <div>
            <div class="carousel">
                <div id="item1" class="carousel-item w-full h-[250px] mt-4 ">
                    <img src={pic1} class="w-full rounded-2xl" alt='' />
                </div>
            </div>
            
        </div>
    );
};

export default Cards;