import React from 'react';
import member from '../../images/pic1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


const CEO = () => {
    return (
        <div class="hero h-[300px] bg-base-200 m-2 w-[1120px] rounded-xl ">
            <div class="hero-content flex-col lg:flex-row text-info-content">
                <img className='h-[250px] w-[600px]' src={member} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-4xl font-bold">MEET THE TEAM</h1>
                    <br />
                    <h1 class="text-2xl  font-bold"><FontAwesomeIcon className='text-primary-focus mr-4' icon={faUserFriends} />Mr. Subrota Biswas</h1>
                    <br />
                    <p><FontAwesomeIcon className='text-primary-focus mr-2 font-bold ' icon={faCheckCircle} />Founder Director</p>
                    <p>young talented and creative designer with a bulk volume of project management & handover experience with local & multinational companies.</p>
                    <br />
                    <a class="btn btn-primary text-primary-content mt-[-10px]" target="_blank" href="https://www.linkedin.com/in/kaniz-mitu/">LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default CEO;