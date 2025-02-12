import Slider from 'react-slick';
import productdetail from '../assest/img/product-image3.jpg';
import productdetail2 from '../assest/img/product-image1.webp';
import productdetail3 from '../assest/img/product-image2.webp';
import {useRef, useState } from 'react';
// import zoom (InnerImageZoom react)
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// 

const ProductZoom = () => {
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false
    };
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };
    const[slideIndex, setSlideIndex]=useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

   

    const goto =(index) =>{
        setSlideIndex(index)
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }
    return ( 
        <div className="productZoom">
                 <div className='productZoom position-relative'>
                        <span className=" sale badge badge-primary ">28%</span>
                        <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                            <div className='item'>
                                {/* zoom img start */}
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={productdetail}
                                />
                                {/* zoom img end */}
                            </div>
                            <div className='item'>
                                {/* zoom img start */}
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={productdetail2}
                                />
                                {/* zoom img end */}
                            </div>
                            <div className='item'>
                                {/* zoom img start */}
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={productdetail3}
                                />
                                {/* zoom img end */}
                            </div>
                        </Slider>
                    </div>
               <div className='d-flex'>
               <Slider {...settings} className='zoomSlider'ref={zoomSlider}>
                        <div className={`item ${slideIndex===0 && `item_active`}`}>                                
                               <img src={productdetail} alt='img' className='w-100' onClick={()=>goto(0)}/>
                        </div>
                        <div className={`item ${slideIndex===1 && `item_active`}`}>                                
                               <img src={productdetail2} alt='img' className='w-100' onClick={()=>goto(1)}/>
                        </div>
                        <div className={`item ${slideIndex===2 && `item_active`}`}>                                
                               <img src={productdetail3} alt='img' className='w-100' onClick={()=>goto(2)}/>
                        </div>
                </Slider>
               </div>
        </div>
     );
}
 
export default ProductZoom;