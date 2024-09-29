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
        <div className="HomeBannerSection">
               
        <Slider {...settings}>
            <div className="item">
                <img className="banner_img" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg" alt="img w-100"  ></img>
            </div>
            <div className="item ">
                <img className="banner_img" src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg" alt="img w-100" ></img>
            </div>
            
        </Slider>

            </div>
     );
}
 
export default HomeBanner;