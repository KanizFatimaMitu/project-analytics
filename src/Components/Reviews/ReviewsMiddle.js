import React from 'react';
import Review from '../../images/Reviews.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faTools, faClock } from '@fortawesome/free-solid-svg-icons'


const ReviewsMiddle = () => {
    return (
        <div>
            <div>
                <img className='my-4 rounded-xl' src={Review} alt='' />
            </div>

            <div className='grid grid-cols-3 my-4 gap-2'>
                <div class="card  bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title"> <FontAwesomeIcon
                            className=' text-2xl text-primary font-bold mr-2'
                            icon={faUserFriends} />Great Have Team</h2>
                        <p>We great communication team.</p>
                    </div>
                </div>
                <div class="card  bg-primary text-primary-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title"><FontAwesomeIcon
                        className=' text-2xl font-bold mr-2'
                        icon={faTools} />Premimum Materials</h2>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>
                <div class="card  bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title"><FontAwesomeIcon
                        className=' text-2xl text-primary font-bold mr-2'
                        icon={faClock} />24/7 delivery <br/> Services</h2>
                        <p>We provide you 24hr Service all week.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ReviewsMiddle;