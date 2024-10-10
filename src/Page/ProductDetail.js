import Rating from '@mui/material/Rating';
import { useState } from 'react';
import ProductZoom from '../Components/ProductZoom';
import QuantityDrop from '../Components/QuantityBox';
import Button from '@mui/material/Button';
import { BsCartFill } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import ProductRelated from '../Components/ProductRelated';
const ProductDetails = () => {
    const [Value, setValue] = useState(2);// star rate
    const [activeTabs, setActiveTabs] = useState(0);// star rate
    const [voteStar, setVoteStar] = useState(0);
    const handleRatingChange = (newValue) => {
        setVoteStar(newValue); // Cập nhật giá trị mới
        console.log(`Rating được chọn: ${newValue}`); // In ra giá trị được chọn
    };
    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-4 pl-5'>
                            <ProductZoom />
                        </div>
                        <div className='col-md-7 pl-5 pr-5'>
                            <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className='list list-inline d-flex align-items-center'>
                                <li className='list-inline-item'>
                                    <div className='d-flex align-item-center me-4'>
                                        <span>Brand:</span>
                                        <span className='ms-2'><b>Welch's</b></span>
                                    </div>
                                </li>
                                <li className='list-inline-item '>
                                    <div className='d-flex align-items-center'>
                                        <Rating name="read-only" className='mt-1' size='small' precision={0.5} value={Value} readOnly />
                                        <span className='text-light cursor me-2'>1 Review</span>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <div className='d-flex align-item-center me-4'>
                                        <span>SKU:</span>
                                        <span className='ms-2'><b>ZU92739</b></span>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex info mb-3">
                                <span className="oldPrice">$20.00</span>
                                <span className="salePrice text-danger ms-3">$14.00</span>
                            </div>
                            <span className='badge bg-success'> IN STOCK</span>
                            <p className='mt-2'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                            <div className='d-flex align-items-center mt-3'>
                                <QuantityDrop />
                                <Button className='btn-blue btn-lg btn-big btn-round ms-3'><BsCartFill /> &nbsp; Add To Card</Button>
                            </div>
                            <div className='d-flex align-items-center mt-3'>
                                <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty /> &nbsp; Add To Wishlist</Button>
                                <Button className='btn-round btn-sml ms-5' variant='outlined'><MdCompareArrows /> &nbsp; Compare</Button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='card mt-5 mb-4 p-5 detailspageTabs'>
                    <div className='customTabs'>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'>
                                <Button className={`${activeTabs === 0 && 'active'}`}
                                    onClick={() => {
                                        setActiveTabs(0)
                                    }}
                                >Description</Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button className={`${activeTabs === 1 && 'active'}`}
                                    onClick={() => {
                                        setActiveTabs(1)
                                    }}
                                >Additional info</Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button className={`${activeTabs === 2 && 'active'}`}
                                    onClick={() => {
                                        setActiveTabs(2)
                                        // showReviews()
                                    }}
                                >Reivew</Button>
                            </li>
                        </ul>

                            <br />

                            {
                                activeTabs === 0 &&
                                <div className='tabContent'>
                                    <p>Descripttion</p>
                                </div>
                            }

                            {
                                activeTabs === 1 &&
                                <div className='tabContent'>
                                    <div className='table-responsive'>
                                        <table className='table table-bỏdered'>
                                            <tbody>
                                                <tr className='stand-up'>
                                                    <th>Stand up</th>
                                                    <td>
                                                        <p>35"L abc</p>
                                                    </td>
                                                </tr>
                                                <tr className='foled-wo-wheels'>
                                                    <th>Stand up</th>
                                                    <td>
                                                        <p>35"L abc</p>
                                                    </td>
                                                </tr>
                                                <tr className='foled-w-wheels'>
                                                    <th>Stand up</th>
                                                    <td>
                                                        <p>35"L abc</p>
                                                    </td>
                                                </tr>
                                                <tr className='door-pass-through'>
                                                    <th>Stand up</th>
                                                    <td>
                                                        <p>35"L abc</p>
                                                    </td>
                                                </tr>
                                                <tr className='frame'>
                                                    <th>Stand up</th>
                                                    <td>
                                                        <p>35"L abc</p>
                                                    </td>
                                                </tr>
                                                <tr className='frame'>
                                                    <th>Stand up</th>
                                                    <td>
                                                        <p>35"L abc</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }
                            {
                                activeTabs === 2 &&
                                <div className='tabContent'>
                                <div className='row'>
                                <div className='col-md-8'>
                                    <h3>Customer questions & answers</h3>
                                    <br />
                                <div className='card p-4 reviewsCard flex-row'>
                                    <div className='rounded-circle'>
                                        <img src='https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&d=mm&r=g' />
                                        <span className='text-g d-block text-center font-weight-bold mt-2'>admin</span>
                                    </div>
                                    
                                    <div className='info pl-5 ms-3'>
                                        <div className='d-flex align-items-center'>
                                            <span className='text-light cursor me-3'>10/10/2024</span>
                                            <Rating name="read-only " className='mt-1' size='small' precision={0.5} value={Value} readOnly />
                                        </div>
                                        <p>item review</p>
                                    </div>
                                </div>

                                    <form className='reviewForm mt-5'>
                                        <b4>Add a review</b4>

                                        <div className='form-group' style={{paddingTop:'20px'}}>
                                            <textarea className='form-control'
                                                placeholder='Write a Review'
                                                name='review'
                                            >
                                            </textarea>
                                        </div>
                                        <br/>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        placeholder='Name'
                                                        name='userName'
                                                    />
                                                </div>
                                                <div className='form-group mt-4'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        placeholder='Email'
                                                        name='email'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <Rating
                                                        name="rating"
                                                        value={voteStar}
                                                        onChange={(event, newValue) => handleRatingChange(newValue)} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <br />

                                        <div className='form-group'>
                                            <Button type='submit' className='btn-blue btn-lg btn-big btn-round ms-3'>
                                                Submit Review
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                                <div className='col-md-4'>
                                    <h3>Customer Review</h3>
                                    <br />
                                    <div className='customReview'>
                                        <div className='progressBarBox d-flex alifn-items-center'>
                                            <span className='me-3'>5 start</span>
                                            <div className='progress' style={{ width: '85%', height: '20px' }}>
                                                <div className='progress-bar bg-success' style={{ width: '55%', height: '20px' }}>55%</div>
                                            </div>
                                        </div>
                                        <div className='progressBarBox d-flex alifn-items-center'>
                                            <span className='me-3'>4 start</span>
                                            <div className='progress' style={{ width: '85%', height: '20px' }}>
                                                <div className='progress-bar bg-success' style={{ width: '45%', height: '20px' }}>45%</div>
                                            </div>
                                        </div>
                                        <div className='progressBarBox d-flex alifn-items-center'>
                                            <span className='me-3'>3 start</span>
                                            <div className='progress' style={{ width: '85%', height: '20px' }}>
                                                <div className='progress-bar bg-success' style={{ width: '35%', height: '20px' }}>35%</div>
                                            </div>
                                        </div>
                                        <div className='progressBarBox d-flex alifn-items-center'>
                                            <span className='me-3'>2 start</span>
                                            <div className='progress' style={{ width: '85%', height: '20px' }}>
                                                <div className='progress-bar bg-success' style={{ width: '25%', height: '20px' }}>25%</div>
                                            </div>
                                        </div>
                                        <div className='progressBarBox d-flex alifn-items-center'>
                                            <span className='me-3'>1 start</span>
                                            <div className='progress' style={{ width: '85%', height: '20px' }}>
                                                <div className='progress-bar bg-success' style={{ width: '15%', height: '20px' }}>15%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            }

                        </div>
                    </div>

{/* Product Related */}
                    <div className='mt-5'>
                    <ProductRelated />
                    </div>
                    
                </div>
               
               
               
            </section>
        </>
    );
}

export default ProductDetails;