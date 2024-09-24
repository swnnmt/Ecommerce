import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {

    const[isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

    return (   <nav className='d-flex'>
        <div className='navMain container'>
            <div className='row'>
                <div className='col-sm-3 navPart1'>
                    <div className='catWrapper' >
                        <Button className='allCatTab align-items-center' onClick={()=>setIsOpenSidebarVal(!isOpenSidebarVal)}>
                            <span className='icon1 me-2'><IoIosMenu/></span>
                            <span className='text'>All CATEGORIES</span>
                            <span className='icon2 ms-2'><FaAngleDown/></span>
                        </Button>
                        <div className={`sidebarNav ${isOpenSidebarVal=== true ? 'open':''}`}>
                               <ul>
                               <li className='list-inline-item'><Link to={'/'}>Home</Link> </li>
                               <li className='list-inline-item'><Link to={'/'}>Men</Link> </li>
                               <li className='list-inline-item'><Link to={'/'}>Women</Link> </li>
                               <li className='list-inline-item'><Link to={'/'}>Kid</Link> </li>
                               </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-9 navPart2 d-flex'>
                    <ul className='list list-inline me-auto'>
                        <li className='list-inline-item'><Link to={'/'}>Home</Link> </li>
                        <li className='list-inline-item'><Link to={'/'}>Men</Link>
                            <div className='submenu shadow'>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'><Link to={'/'}>Fashion </Link>
                        <div className='submenu shadow'>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'><Link to={'/'}>Electronic</Link>
                        <div className='submenu shadow'>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'><Link to={'/'}>Bakery</Link>
                        <div className='submenu shadow'>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'><Link to={'/'}>Grocery</Link><div className='submenu shadow'>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'><Link to={'/'}>Food</Link><div className='submenu shadow'>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'><Link to={'/'}>Blog</Link></li>
                        <li className='list-inline-item'><Link to={'/'}>Contac us</Link></li> 
                    </ul>
                </div>
            </div>
        </div>
    </nav> );
}
 
export default Navigation;