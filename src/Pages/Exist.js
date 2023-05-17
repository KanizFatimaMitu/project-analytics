import React from 'react';
import './Shared.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import SidebarMenu from '../Components/SidebarMenu/SidebarMenu';
import { NavLink } from 'react-router-dom';

const Exist = () => {
    return (
        <div className='appGlass'>
            <SidebarMenu></SidebarMenu>
            <div class="hero h-[600px] w-[800px] mx-auto my-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl text-primary-content font-bold">Login now!</h1>
                        <p class="py-6"><FontAwesomeIcon className='text-primary-content mr-2 font-bold ' icon={faCheckCircle} />Enter your Official Email. It must be valid and have to match Office document.</p>
                        <p class="py-6"><FontAwesomeIcon className='text-primary-content mr-2 font-bold ' icon={faCheckCircle} />Enter your Password which is given by us. must be match with office document.</p>
                        <p class="py-6"><FontAwesomeIcon className='text-primary-content mr-2 font-bold ' icon={faCheckCircle} />If access denied then contct with management immediately</p>
                       
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-primary-content">Email <small>*</small></span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-primary-content">Password <small>*</small></span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover text-primary-content">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-success"><NavLink to='/'>Login</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exist;