import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Cards = () => {
    return (
        <div class="grid grid-rows-5 gap-2 mt-4 flex justify-center items-center">
            <div class="card w-60 h-30 bg-success text-info-content ">
                <div class="card-body ">
                    <h2 class="card-title"><span><FontAwesomeIcon className='text-secondary-focus' icon={faUpRightFromSquare} /></span>New User</h2>
                    <p className='font-bold text-xl text-primary-content'>2K</p>
                </div>
            </div>

            <div class="card w-60 h-30 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title"><span><FontAwesomeIcon className='text-secondary-focus' icon={faUpRightFromSquare} /></span>New Sell Posts</h2>
                    <p className='font-bold text-xl text-primary-content'>18</p>
                </div>
            </div>

            <div class="card w-60 h-30 mt-[-8px] bg-success text-primary-content">
                <div class="card-body">
                    <h2 class="card-title"><span><FontAwesomeIcon className='text-secondary-focus' icon={faUpRightFromSquare} /></span>New Visitor</h2>
                    <p className='font-bold text-xl text-primary-content'>5.3K</p>
                </div>
            </div>

            <div class="card w-60 h-30 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title"><span><FontAwesomeIcon className='text-secondary-focus' icon={faUpRightFromSquare} /></span>Todays order</h2>
                    <p className='font-bold text-xl text-primary-content'>126pcs</p>
                </div>
            </div>

            <div class="card w-60  h-15 text-primary-content flex justify-center items-center">
                <div class="card-body">
                <button class="btn btn-info">See more details</button>
   
                </div>
            </div>

        </div>
    );
};

export default Cards;