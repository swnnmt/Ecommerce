import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);
    return ( 
        <>
            <div className="sidebar">
                <div className="filterBox">
                    <h6>Product Categories</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Men" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Women" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Kids" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Beauty" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Watch" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Fashion" />
                            </li>
                            
                        </ul>
                    </div>
                </div>


                <div className="filterBox">
                    <h6>Filter by price</h6>

                    <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5}/>

                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span>From:<strong className='text-dark'>Rs:{value[0]}</strong> </span>
                        <span className='ms-auto'>From: <strong className='text-dark'>Rs:{value[1]}</strong></span>
                    </div>
                </div>

                <div className="filterBox">
                    <h6>Product Status</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="In Stock" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="on Sale" />
                            </li>    
                        </ul>
                    </div>
                </div>
                <div className="filterBox">
                    <h6>Brands</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Oreo" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Quaker" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Welch's" />
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <br/>

                <Link to="#"><img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif' alt='img' className='w-100'></img></Link>

            </div>
        </>
     );
}
 
export default Sidebar;