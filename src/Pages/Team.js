import React from 'react';
import './Team.css'
import SidebarMenu from '../Components/SidebarMenu/SidebarMenu';
import CEO from '../Components/TeamItem/CEO';
import OtherMember from '../Components/TeamItem/OtherMember';

const Team = () => {
    return (
        <div className='teamGlass'>
            <SidebarMenu></SidebarMenu>
            <div>
                <CEO></CEO>
                <OtherMember></OtherMember>
            </div>
        </div>
    );
};

export default Team;