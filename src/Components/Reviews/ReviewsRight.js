import React from 'react';
import Review from '../../images/review1.png'
import Review1 from '../../images/review3.png'
import Review2 from '../../images/review2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const ReviewsRight = () => {
    return (
        <div className='grid grid-rows-3 gap-2 m-2'>
            <div class="card card-side bg-primary text-primary-content shadow-xl">

                <figure><img className='h-[150px] w-[120px] ' src={Review} alt="Movie" /></figure>
                <div class="card-body">
                    <small className='font-bold text-primary-content'>16 May, 2023</small>
                    <p class="card-title text-sm font-bold ">"shopping with them is great experience !!"</p>

                    <small><FontAwesomeIcon className='text-primary-content mr-2 font-bold ' icon={faStar} />wish you will not be disappointed.</small>
                    <div>
                        <small className='mr-2 font-bold'>87%</small>
                        <progress class="progress progress-primary-content w-16" value="87" max="100"></progress>
                    </div>

                </div>
            </div>
            <div class="card card-side bg-neutral text-neutral-content shadow-xl">

                <figure><img className='h-[150px] w-[120px] ' src={Review1} alt="Movie" /></figure>
                <div class="card-body">
                    <small className='font-bold text-primary-focus'>16 May, 2023</small>
                    <p class="card-title text-sm font-bold ">"Love their supportive gesture !!"</p>

                    <small><FontAwesomeIcon className='text-primary-focus mr-2 font-bold ' icon={faStar} />watch on Jetflix app.you will be amazed.</small>
                    <div>
                        <small className='mr-2 font-bold'>70%</small>
                        <progress class="progress progress-success w-16" value="70" max="100"></progress>
                    </div>

                </div>
            </div>
            <div class="card card-side bg-primary text-primary-content shadow-xl">

                <figure><img className='h-[150px] w-[120px] ' src={Review2} alt="Movie" /></figure>
                <div class="card-body">
                    <small className='font-bold text-primary-content'>16 May, 2023</small>
                    <p class="card-title text-primary-content text-sm font-bold ">"shopping with them is great experience !!"</p>

                    <small><FontAwesomeIcon className='text-primary-content mr-2 font-bold ' icon={faStar} />Recommanded</small>
                    <div>
                        <small className='mr-2 font-bold'>97%</small>
                        <progress class="progress progress-primary-content w-16" value="97" max="100"></progress>
                    </div>

                </div>
            </div>
           

        </div>
    );
};

export default ReviewsRight;