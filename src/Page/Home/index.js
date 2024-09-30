import HomeBanner from "../../Components/HomeBanner";
import banner1 from '../../assest/img/banner1.jpg';
import banner2 from '../../assest/img/banner2.jpg';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import ProductItems from "../../Components/ProductItems";
import HomeCat from "../../Components/HomeCat";
import banner5 from '../../assest/img/banner5.jpg';
import banner6 from '../../assest/img/banner6.jpg';
import newsLetterimg from '../../assest/img/newLetter.webp';
import { MdOutlineEmail } from "react-icons/md";
const Home = () => {
    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return ( 
        <>
            <HomeBanner/>

            <HomeCat/>

            <section className="homeProducts"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="sticky">
                           <div className="banner">
                                <img src={banner1} alt="img" className="cursor"/>    
                           </div>
                           <div className="banner mt-5">
                                <img src={banner2} alt="img" className="cursor"/>    
                           </div>
                        </div>
                        </div>
                        <div className="col-md-9 productRow">
                        {/* Product start */}
                            <div className="d-flex align-items-center" >
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">Best Sellers</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>

                                <Button className="viewAllBtn ms-auto">View all<IoIosArrowRoundForward/></Button>

                            </div>

                            <div className="product_row w-100">
                            <Slider {...productSliderOptions}>
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                            </Slider>
                            </div>
                 {/* Product end */}
                 {/* New product  start*/}
                            <div className="d-flex align-items-center mt-4" >
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">New Product</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>

                                <Button className="viewAllBtn ms-auto">View all<IoIosArrowRoundForward/></Button>

                            </div>
                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                            </div>
                 {/* New product  end*/}
                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner">
                                    <img src={banner5} alt="img" className="cursor w-100"/>    
                                </div>
                                <div className="banner">
                                    <img src={banner6} alt="img" className="cursor w-100"/>    
                                </div>
                            </div>
                            

                        </div>
                       
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb -3 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-white mb-1">$20 discount for your first order</p>
                                <h3 className="text-white">Join our newsletter and get...</h3>
                                <p className="text-light">Join our email subscription now to get updates on promotions and coupons.</p>

                                <form>
                                    <MdOutlineEmail />
                                    <input type="text" placeholder="Your email address"/>
                                    <Button>Subscribe</Button>
                                </form>

                            </div>
                            <div className="col-md-6">
                                <img src={newsLetterimg}/>
                            </div>
                            
                        </div>
                    </div>
            </section>
        </>
     );
}
 
export default Home;