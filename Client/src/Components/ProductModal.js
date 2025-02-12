import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from 'react-icons/md';
import Rating from '@mui/material/Rating';
import { useContext, useRef, useState } from 'react';

import QuantityBox from './QuantityBox.js';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from '../App.js';
import ProductZoom from './ProductZoom.js';

const ProductModal = () => {


    const context= useContext(MyContext);
    const [Value, setValue] = useState(2);// star rate
  
    return (

        <Dialog open={true} className='productModal' onClose={()=>context.setIsOpenProductModal(false)} >
            <h4 className='mb-1 font-weight-bold'>All Natural Italian-Style Chicken Meatballs</h4>
            <div className='d-flex align-item-center'>
                <div className='d-flex align-item-center me-4'>
                    <span>Brand:</span>
                    <span className='ms-2'><b>Welch's</b></span>
                </div>
                <Rating name="read-only" className='mt-1' size='small' precision={0.5} value={Value} readOnly />
            </div>
            <hr />
            <div className=' row mt-2 productDetailModal'>
                <div className='col-md-5'>
                    <ProductZoom/>
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
                            <Button className='btn-round btn-sml ms-5' variant='outlined'><MdCompareArrows/> &nbsp; Compare</Button>
                       </div>

                </div>
            </div>
            <Button className='close' onClick={()=>context.setIsOpenProductModal(false)}><MdClose /></Button>
        </Dialog>

    );
}

export default ProductModal;