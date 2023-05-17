import React from 'react';
import './Shared.css'
import SidebarMenu from '../Components/SidebarMenu/SidebarMenu';
import AnalyticsTable from '../Components/Analytics/AnalyticsTable';

const Analytics = () => {
    return (
        <div className='appGlass'>
            <SidebarMenu></SidebarMenu>
            <AnalyticsTable></AnalyticsTable>
        </div>
    );
};

export default Analytics;