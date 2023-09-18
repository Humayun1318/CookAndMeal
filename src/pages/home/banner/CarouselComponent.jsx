import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ data }) => {
    console.log(data);

    // Use state to store the selected slide index
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Handle slide change
    const handleSlideChange = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div>
            <Carousel
                showArrows={true}
                selectedItem={selectedIndex}
                onChange={handleSlideChange}
            >
                {data.map((item) => (
                    <div key={item.id}>
                        <img src={item.foodPhotoUrl} alt={`Slide ${item.id}`} />
                        <p className="legend">{item.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
