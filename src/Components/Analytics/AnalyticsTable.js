import React from 'react';
import Colum from '../Charts/Colum';
import Branches from '../Charts/Branches';

const AnalyticsTable = () => {
    return (
        <div className='grid grid-cols-1'>
            <Branches></Branches>
            <Colum></Colum>
        </div>
    );
};

export default AnalyticsTable;