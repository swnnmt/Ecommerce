import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import ProductItems from "./ProductItems";
const ProductRelated = () => {
    var productRelated = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return ( 
        <>
                                 <div className="d-flex align-items-center" >
                                <div className="info w-75">
                                    <h3 className="mb-4 hd">Product Related</h3>
                                </div>

                                <Button className="viewAllBtn ms-auto">View all<IoIosArrowRoundForward/></Button>

                            </div>

                            <div className="product_row w-100">
                            <Slider {...productRelated}>
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                               <ProductItems/>
                            </Slider>
                            </div>
        </>
     );
}
 
export default ProductRelated;