import React from 'react';
import './Reviews.css'
import SidebarMenu from '../Components/SidebarMenu/SidebarMenu';
import ReviewsMiddle from '../Components/Reviews/ReviewsMiddle';
import ReviewsRight from '../Components/Reviews/ReviewsRight';

const Reviews = () => {
    return (
        <div className='reviewGlass'>
            <SidebarMenu></SidebarMenu>
            <ReviewsMiddle></ReviewsMiddle>
            <ReviewsRight></ReviewsRight>
        </div>
    );
};

export default Reviews;