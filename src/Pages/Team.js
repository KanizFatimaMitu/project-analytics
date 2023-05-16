import React from 'react';
import './Team.css'
import SidebarMenu from '../Components/SidebarMenu/SidebarMenu';
import CEO from '../Components/TeamItem/CEO';

const Team = () => {
    return (
        <div className='teamGlass'>
            <SidebarMenu></SidebarMenu>
            <CEO></CEO>
           <h1> here all our team member</h1>
        </div>
    );
};

export default Team;