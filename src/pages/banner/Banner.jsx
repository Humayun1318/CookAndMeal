import React from 'react';
import bannerImage from '../../assets/banner.jpeg'

const Banner = () => {


    return (
        <div style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover' }}>
            <h3>this is banner</h3>
        </div>
    );
};

export default Banner;