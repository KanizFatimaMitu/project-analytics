import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faAreaChart, faUserFriends, faTasks, faSignOut, faChessQueen } from '@fortawesome/free-solid-svg-icons'

const SidebarMenu = () => {
    return (
        <div className='bg-success m-4 rounded-xl shadow-lg '>
            <h1 className='flex justify-center items-center mt-12 mb-8'>
                <span className='text-2xl font-bold text-primary-content'><FontAwesomeIcon icon={faChessQueen} /></span>
                <span className='text-xl ml-4 font-bold text-success-content'>Shapers</span>
            </h1>
            <div>
                <ul class="menu text-success-content font-bold flex justify-center items-start w-56 p-2 rounded-box ml-8 mt-12">
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faBarsProgress} />
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faAreaChart} />
                            Analytics
                        </a>
                    </li>
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faUserFriends} />
                            Team
                        </a>
                    </li>
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faTasks} />
                            Task Reviews
                        </a>
                    </li>
                    <li className='mt-64'>
                        <a>
                            Exist
                           <FontAwesomeIcon icon={faSignOut} />
                        </a>
                    </li>


                </ul>
            </div>

        </div>
    );
};

export default SidebarMenu;