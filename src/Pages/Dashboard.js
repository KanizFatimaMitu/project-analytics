import React from 'react';
import './Shared.css'
import SidebarMenu from '../Components/SidebarMenu/SidebarMenu';
import Charts from '../Components/Charts/Charts';
import Cards from '../Components/Cards/Cards';

const Dashboard = () => {
    return (
        <div className='appGlass'>
            <SidebarMenu></SidebarMenu>
            <Charts></Charts>
            <Cards></Cards>
        </div>
    );
};

export default Dashboard;