import React from 'react';
import Colum from '../Charts/Colum';
import Branches from '../Charts/Branches';

const AnalyticsTable = () => {
    return (
        <div className='grid grid-cols-1'>

            <Colum></Colum>
            <Branches></Branches>
        </div>
    );
};

export default AnalyticsTable;