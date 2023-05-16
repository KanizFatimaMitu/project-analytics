import React from 'react';
import member from '../../images/pic1.jpg'

const CEO = () => {
    return (
        <div class="hero h-[350px] bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={member} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default CEO;