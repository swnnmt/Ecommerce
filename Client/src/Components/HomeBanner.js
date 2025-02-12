import React from "react";
import Slider from "react-slick";


const HomeBanner = () => {

        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true
        };


    return ( 
        <div className="container mt-3">
            <div className="HomeBannerSection">
               
               <Slider {...settings}>
                   <div className="item">
                       <img className="banner_img" src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-6.jpg" alt="img w-100"  ></img>
                   </div>
                   <div className="item ">
                       <img className="banner_img" src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-7.jpg" alt="img w-100" ></img>
                   </div>
                   
               </Slider>
       
                   </div>
        </div>
        
     );
}
 
export default HomeBanner;