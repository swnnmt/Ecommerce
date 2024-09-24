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
                <img src="https://s1.cdn.autoevolution.com/images/gallery/NISSAN-GT-R--R35--Nismo-5327_38.jpg" alt="img" className="w-100"></img>
            </div>
            <div className="item">
                <img src="https://s1.cdn.autoevolution.com/images/gallery/NISSAN-GT-R--R35--Nismo-5327_38.jpg" alt="img" className="w-100"></img>
            </div>
            
        </Slider>

            </div>
     );
}
 
export default HomeBanner;