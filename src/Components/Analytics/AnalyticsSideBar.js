import React from 'react';
import Polar from '../Charts/Polar';

const AnalyticsSideBar = () => {
    return (
        <div className='grid grid-rows-3 gap-2 m-4'>
            <div class="card shadow-xl">
                <div class="card-body items-center text-center">
                   <Polar></Polar>
                </div>
            </div>
            <div class="card shadow-xl">
                <div class="card-body items-center text-center">
                   <Polar></Polar>
                </div>
            </div>
            <div class="card shadow-xl">
                <div class="card-body items-center text-center">
                   <Polar></Polar>
                </div>
            </div>
           
        </div>
    );
};

export default AnalyticsSideBar;