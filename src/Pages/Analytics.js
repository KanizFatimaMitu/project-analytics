import React from 'react';
import './Shared.css'
import SidebarMenu from '../Components/SidebarMenu/SidebarMenu';
import AnalyticsTable from '../Components/Analytics/AnalyticsTable';
import AnalyticsSideBar from '../Components/Analytics/AnalyticsSideBar';

const Analytics = () => {
    return (
        <div className='appGlass'>
            <SidebarMenu></SidebarMenu>
            <AnalyticsTable></AnalyticsTable>
            <AnalyticsSideBar></AnalyticsSideBar>
        </div>
    );
};

export default Analytics;