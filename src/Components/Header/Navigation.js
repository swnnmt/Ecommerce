import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (   <nav className='d-flex'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-3 navPart1'>
                    <Button className='allCatTab align-items-center'>
                        <span className='icon1 me-2'><IoIosMenu/></span>
                        <span className='text'>All CATEGORIES</span>
                        <span className='icon2 ms-2'><FaAngleDown/></span>
                    </Button>
                </div>
                <div className='col-sm-9 navPart2 d-flex align-items-center'>
                    <ul className='list list-inline ms-auto'>
                        <li className='list-inline-item'><Link to={'/'}>Men <span className='icon2 ms-2'><FaAngleDown/></span> </Link>
                            <div className='submenu shadow'>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                                <Link to="/"><span>clothing</span></Link>
                            </div>
                        </li>
                        <li className='list-inline-item'><Link to={'/'}>Fashion <span className='icon2 ms-2'><FaAngleDown/></span></Link></li>
                        <li className='list-inline-item'><Link to={'/'}>Electronic</Link></li>
                        <li className='list-inline-item'><Link to={'/'}>Bakery</Link></li>
                        <li className='list-inline-item'><Link to={'/'}>Grocery</Link></li>
                        <li className='list-inline-item'><Link to={'/'}>Food</Link></li>
                        <li className='list-inline-item'><Link to={'/'}>Blog</Link></li>
                        <li className='list-inline-item'><Link to={'/'}>Contac us</Link></li> 
                    </ul>
                </div>
            </div>
        </div>
    </nav> );
}
 
export default Navigation;