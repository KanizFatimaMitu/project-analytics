import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Cards = () => {
    return (
        <div class="grid grid-rows-5 gap-2 mt-4 flex justify-center items-center">
            <div class="card w-60 h-30 bg-success text-info-content ">
                <div class="card-body ">
                    <small class="card-title font-bold"><span><FontAwesomeIcon className='text-secondary-focus' icon={faUpRightFromSquare} /></span>New User</small>
                    <p className='font-bold text-xl text-primary-content'>2K</p>
                </div>
            </div>

            <div class="card w-60 h-30 bg-primary text-info-content">
                <div class="card-body">
                    <small class="card-title font-bold"><span><FontAwesomeIcon className='text-secondary-focus' icon={faUpRightFromSquare} /></span>New Sell Posts</small>
                    <p className='font-bold text-xl text-primary-content'>32</p>
                </div>
            </div>

            <div class="card w-60 h-30 mt-[-8px] bg-success text-info-content">
                <div class="card-body">
                    <small class="card-title font-bold"><span><FontAwesomeIcon className='text-secondary-focus' icon={faUpRightFromSquare} /></span>New Visitor</small>
                    <p className='font-bold text-xl text-primary-content'>5.3K</p>
                </div>
            </div>

            <div class="card w-60 h-30 bg-primary text-info-content">
                <div class="card-body">
                    <small class="card-title font-bold"><span><FontAwesomeIcon className='text-secondary-focus' icon={faUpRightFromSquare} /></span>Todays order</small>
                    <p className='font-bold text-xl text-primary-content'>126pcs</p>
                </div>
            </div>

            <div class="card w-60  h-15 text-info-content flex justify-center items-center">
                <div class="card-body">
                <button class="btn btn-info"><NavLink to='/'>See more details </NavLink></button>
   
                </div>
            </div>

        </div>
    );
};

export default Cards;