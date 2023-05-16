import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faAreaChart, faUserFriends, faTasks, faSignOut, faChessQueen } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

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
                        <NavLink to='/'>
                            <FontAwesomeIcon icon={faBarsProgress} />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/analytics'>
                            <FontAwesomeIcon icon={faAreaChart} />
                            Analytics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/team'>
                            <FontAwesomeIcon icon={faUserFriends} />
                            Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reviews'>
                            <FontAwesomeIcon icon={faTasks} />
                            Task Reviews
                        </NavLink>
                    </li>
                    <li className='mt-64'>
                        <NavLink to='/exist'>
                            Exist
                           <FontAwesomeIcon icon={faSignOut} />
                        </NavLink>
                    </li>


                </ul>
            </div>

        </div>
    );
};

export default SidebarMenu;