import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { FaRegTrashCan } from "react-icons/fa6";
import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '@mui/material';
const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    // Handle incrementing the value
    const handleIncrement = () => {
        setQuantity(quantity => quantity + 1);
    };

    // Handle decrementing the value
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity => quantity - 1);
        }
    }
    // lấy giá tự api
    const priceClone = 2.52;

    // dùng reduce để lấy tổng giá trị trong cart
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="hd mb-0">Your Cart</h2>
                            <p>There are 3 products in your cart</p>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link to={'/product/1'} style={{ color: 'black', textDecoration: 'none' }}>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="img" className="w-100" />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Field Roast Chao Cheese Creamy Original</h6>

                                                            <div className="d-flex">
                                                                <Rating name='read-only' value={2.5} size='small' precision={0.5} />
                                                                <span className='text-light'>(2.5)</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <span className='text-light' style={{ fontSize: '20px', fontWeight: '700' }}>${priceClone}</span>
                                            </td>
                                            <td>
                                                <div className="number-input-container">
                                                    <div className="value-display">{quantity}</div>
                                                    <div className="number-input">
                                                        <button className="arrow up" onClick={handleIncrement}><IoIosArrowUp /></button>
                                                        <button className="arrow down" onClick={handleDecrement}><IoIosArrowDown /></button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span style={{ fontSize: '20px', fontWeight: '700', color: '#3BB77E' }}>${(quantity * priceClone).toFixed(2)}</span>
                                            </td>
                                            <td>
                                                <span style={{ fontSize: '15px' }}><FaRegTrashCan /></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>
                        <div className="col-md-4 d-flex">
                            <div class="border p-md-4 cart-totals ml-30">
                                <div class="table-responsive">
                                    <table class="table no-border">
                                        <tbody>
                                            <tr>
                                                <td class="cart_total_label">
                                                    <h6 class="text-muted">Subtotal</h6>
                                                </td>
                                                <td class="cart_total_amount">
                                                    <h4 class="text-brand text-end">$12.31</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="col" colspan="2">
                                                    <div class="divider-2 mt-10 mb-10"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cart_total_label">
                                                    <h6 class="text-muted">Shipping</h6>
                                                </td>
                                                <td class="cart_total_amount">
                                                    <h5 class="text-heading text-end">Free </h5></td></tr> <tr>
                                                <td class="cart_total_label">
                                                    <h6 class="text-muted">Estimate for</h6>
                                                </td>
                                                <td class="cart_total_amount">
                                                    <h5 class="text-heading text-end">United Kingdom </h5></td></tr> <tr>
                                                <td scope="col" colspan="2">
                                                    <div class="divider-2 mt-10 mb-10"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cart_total_label">
                                                    <h6 class="text-muted">Total</h6>
                                                </td>
                                                <td class="cart_total_amount">
                                                    <h4 class="text-brand text-end">$12.31</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                               <div className='ProcessCheckOut d-flex '>
                               <Link className='btn-blue btn-lg btn-big btn-round checkOut align-items-center justify-content-center ms-6'>Process to CheckOut</Link>
                               </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;