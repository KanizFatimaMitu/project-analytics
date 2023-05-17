import React from 'react';

const Rating = () => {
    return (
        <div >
            <small className='mr-2 font-bold'>70%</small>
            <progress class="progress progress-success w-16" value="70" max="100"></progress>
        </div>
    );
};

export default Rating;