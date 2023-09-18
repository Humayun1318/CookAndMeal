import React, { useEffect, useState } from 'react';
import CarouselComponent from './CarouselComponent';

const Banner = () => {
    const [dataArray, setDataArray] = useState([]);
    const [dataLogged, setDataLogged] = useState(false);

    useEffect(() => {
        if (!dataLogged) {
            fetch(`allData.json`)
                .then((res) => res.json())
                .then((data) => {
                    // Convert the data into a single array of objects
                    const chefsAndRecipes = [...data.chefs, ...data.recipes];
                    // console.log(chefsAndRecipes)
                    setDataArray(chefsAndRecipes);
                    setDataLogged(true);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [dataLogged]);
    
    return (
        // <div className="carousel w-full h-[600px] mb-20 mt-20">
        //     <div id="slide1" style={{
        //         backgroundImage: `url(${SpaghettiCarbonara})`,
        //         backgroundSize: 'cover', width: '100%', height: '100%'
        //     }}
        //         className="carousel-item relative w-full">

        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 
        //         right-5 top-1/2">
        //             <a href="#slide6" className="btn btn-circle">❮</a>
        //             <a href="#slide2" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" style={{
        //         backgroundImage: `url(${bannerImage})`,
        //         backgroundSize: 'cover', width: '100%', height: '100%'
        //     }} className="carousel-item relative w-full">


        //         <div className="absolute flex justify-between transform -translate-y-1/2 
        //         left-5 right-5 top-1/2">
        //             <a href="#slide1" className="btn btn-circle">❮</a>
        //             <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" style={{
        //         backgroundImage: `url(${bannerImage})`,
        //         backgroundSize: 'cover', width: '100%', height: '100%'
        //     }} className="carousel-item relative w-full">
        //         <h4>slide3333333333333333333333333</h4>
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 
        //         right-5 top-1/2">
        //             <a href="#slide2" className="btn btn-circle">❮</a>
        //             <a href="#slide4" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide4" style={{
        //         backgroundImage: `url(${bannerImage})`,
        //         backgroundSize: 'cover', width: '100%', height: '100%'
        //     }} className="carousel-item relative w-full">
        //         <h3>slide44444444444444444444</h3>
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 
        //         right-5 top-1/2">
        //             <a href="#slide3" className="btn btn-circle">❮</a>
        //             <a href="#slide5" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide5" style={{
        //         backgroundImage: `url(${bannerImage})`,
        //         backgroundSize: 'cover', width: '100%', height: '100%'
        //     }} className="carousel-item relative w-full">
        //         <h3>slide55555555555</h3>
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 
        //         right-5 top-1/2">
        //             <a href="#slide4" className="btn btn-circle">❮</a>
        //             <a href="#slide6" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide6" style={{
        //         backgroundImage: `url(${bannerImage})`,
        //         backgroundSize: 'cover', width: '100%', height: '100%'
        //     }} className="carousel-item relative w-full">
        //         <h3>slide6666666666666</h3>
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 
        //         right-5 top-1/2">
        //             <a href="#slide5" className="btn btn-circle">❮</a>
        //             <a href="#slide1" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        // </div>
        <div>
            <CarouselComponent data={dataArray}></CarouselComponent>
        </div>

        
    );
};

export default Banner;