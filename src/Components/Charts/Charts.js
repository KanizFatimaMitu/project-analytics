import React from 'react';
import Area from './Area';
import Dounuts from './Donut';
import Line from './Line';
import Radar from './Radar';
import Radial from './Radial';

const Charts = () => {
    return (
        <div>

            <Line></Line>
            <div class="grid grid-cols-2 gap-4 mt-2">
                {/* <Radar ></Radar> */}
                <div className='mr-[-6]'>
                    <Dounuts></Dounuts>
                </div>
                <div>
                    <Area></Area>
                </div>
            </div>
        </div>
    );
};

export default Charts;