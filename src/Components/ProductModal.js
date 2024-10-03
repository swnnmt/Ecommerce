import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from 'react-icons/md';
import Rating from '@mui/material/Rating';
import { useContext, useRef, useState } from 'react';
import Slider from 'react-slick';
import productdetail from '../assest/img/product-image3.jpg';
import productdetail2 from '../assest/img/product-image1.webp';
import productdetail3 from '../assest/img/product-image2.webp';
// import zoom (InnerImageZoom react)
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// 
import QuantityBox from './QuantityBox.js';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from '../App.js';

const ProductModal = () => {


    const context= useContext(MyContext);

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const [value, setValue] = useState(2);
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
    const goto =(index) =>{
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }
    return (

        <Dialog open={true} className='productModal' onClose={()=>context.setIsOpenProductModal(false)} >
            <h4 className='mb-1 font-weight-bold'>All Natural Italian-Style Chicken Meatballs</h4>
            <div className='d-flex align-item-center'>
                <div className='d-flex align-item-center me-4'>
                    <span>Brand:</span>
                    <span className='ml-2'><b>Welch's</b></span>
                </div>
                <Rating name="read-only" className='mt-1' size='small' precision={0.5} value={value} readOnly />
            </div>
            <hr />
            <div className=' row mt-2 productDetailModal'>
                <div className='col-md-5'>
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
                <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                        <div className='item'>                                
                               <img src={productdetail} alt='img' className='w-100' onClick={()=>goto(0)}/>
                        </div>
                        <div className='item'>                                
                               <img src={productdetail2} alt='img' className='w-100' onClick={()=>goto(1)}/>
                        </div>
                        <div className='item'>                                
                               <img src={productdetail3} alt='img' className='w-100' onClick={()=>goto(2)}/>
                        </div>
                </Slider>
                </div>
                <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                                <span className='oldPrice lg me-2'>$20</span>
                                <span className='salePrice text-danger lg'>$14</span>
                        </div> 
                        <span className='badge bg-success'> IN STOCK</span> 
                        <p className='mt-3'>
                        Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
                        </p>

                        <div className='d-flex align-items-center'>
                            <QuantityBox></QuantityBox>
                            <Button className='btn-blue btn-lg btn-big btn-round ms-3'>Add To Card</Button>
                        </div>
                       
                       <div className='d-flex align-items-center mt-4 actions'>
                            <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/> &nbsp; Add To Wishlist</Button>
                            <Button className='btn-round btn-sml ms-5' variant='outlined'><MdCompareArrows/> &nbsp; Add To Wishlist</Button>
                       </div>

                </div>
            </div>
            <Button className='close' onClick={()=>context.setIsOpenProductModal(false)}><MdClose /></Button>
        </Dialog>

    );
}

export default ProductModal;