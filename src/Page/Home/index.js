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
                                {/* <div className="item productItem">
                                    <div className="imgWrapper">
                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="img" className="w-100" />
                                        <span className="badge badge-primary">28%</span>
                                    </div>
                                    <div className="info">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <span className="text-success d-block">In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                        <div className="d-flex">
                                            <span className="oldPrice">$20.00</span>
                                            <span className="salePrice text-danger ms-3">$14.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item productItem">
                                    <div className="imgWrapper">
                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="img" className="w-100" />
                                        <span className="badge badge-primary">28%</span>
                                    </div>
                                    <div className="info">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <span className="text-success d-block">In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                        <div className="d-flex">
                                            <span className="oldPrice">$20.00</span>
                                            <span className="salePrice text-danger ms-3">$14.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item productItem">
                                    <div className="imgWrapper">
                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="img" className="w-100" />
                                        <span className="badge badge-primary">28%</span>
                                    </div>
                                    <div className="info">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <span className="text-success d-block">In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                        <div className="d-flex">
                                            <span className="oldPrice">$20.00</span>
                                            <span className="salePrice text-danger ms-3">$14.00</span>
                                        </div>
                                    </div>
                                </div> */}
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
        </>
     );
}
 
export default Home;