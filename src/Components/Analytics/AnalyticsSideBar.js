import React from 'react';
import Polar from '../Charts/Polar';
import Polar2 from '../Charts/Polar2';
import Polar3 from '../Charts/Polar3';

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
                 <Polar2></Polar2>
                </div>
            </div>
            <div class="card shadow-xl">
                <div class="card-body items-center text-center">
                  <Polar3></Polar3>
                </div>
            </div>
           
        </div>
    );
};

export default AnalyticsSideBar;