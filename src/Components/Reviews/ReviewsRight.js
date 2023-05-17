import React from 'react';
import Review from '../../images/review1.png'

const ReviewsRight = () => {
    return (
        <div className='grid grid-rows-3 gap-2 m-2'>
            <div class="card card-side bg-base-100 shadow-xl">
           
                <figure><img className='h-[90px] w-[90px]' src={Review} alt="Movie" /></figure>
                <div class="card-body">
                <p>16 May, 2023</p>
                    <p class="card-title text-sm font-bold">"shopping with them is great experience !!"</p>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewsRight;