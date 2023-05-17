import React from 'react';
import Review from '../../images/Reviews.jpg'

const ReviewsMiddle = () => {
    return (
        <div>
            <div>
                <img className='my-4 rounded-xl' src={Review} alt='' />
            </div>
            <div className='grid grid-cols-3 my-4 gap-2'>
                <div class="card  bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cookies!</h2>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>
                <div class="card  bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cookies!</h2>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>
                <div class="card  bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cookies!</h2>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsMiddle;