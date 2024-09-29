import React from "react";
import Slider from "react-slick";
import { useState } from "react";

const HomeCat = () => {
    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
    ]);

    var productSliderMore = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <section className="homeCat">
            <div className="container">
            <h3 className="mt-4 hd">Feadture Categories</h3>
                <Slider {...productSliderMore} className="slider-spacing">
                    {
                        itemBg?.map((item, index) => {
                            return (
                            <div key={index}>
                                <div className="itemPrd text-center cursor" style={{background: item}}>
                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="img" />
                                    <h6>Cake & Milk</h6>
                                </div>
                                   
                            </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    );
}

export default HomeCat;
