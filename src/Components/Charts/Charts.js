import React from 'react';
import Cards from './Cards/Cards';
import Dounuts from './Cards/Donut';
import Line from './Line';
import Radar from './Radar';
import Radial from './Radial';

const Charts = () => {
    return (
        <div>
            {/* <Cards></Cards> */}
            <Line></Line>
            <div class="grid grid-cols-2 gap-4 mt-2">
             <Radar ></Radar>
                <Dounuts className="m-6" ></Dounuts>
               
            </div>
        </div>
    );
};

export default Charts;