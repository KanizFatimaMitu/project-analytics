import React from 'react';
import member from '../../images/pic1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faCheckCircle} from '@fortawesome/free-solid-svg-icons'


const CEO = () => {
    return (
        <div class="hero h-[300px] bg-base-200 m-2 w-[1120px] rounded-xl ">
            <div class="hero-content flex-col lg:flex-row text-info-content">
                <img className='h-[250px]' src={member} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-4xl font-bold">MEET THE TEAM</h1>
                    <br/>
                    <h1 class="text-2xl  font-bold"><FontAwesomeIcon className='text-primary-focus mr-2' icon={faUserFriends} />Mr. Subrota Biswas</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default CEO;