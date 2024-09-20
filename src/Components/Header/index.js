import Logo from '../../assest/img/logo.jpg';
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import SearchBox from './SearchBox';
import Button from '@mui/material/Button';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import Navigation from './Navigation';
const Header = () => {
    return ( 
        <>
            <div className="headerWrapper">
                <header className="header">
                    <div className="container">
                        <div className='row'>
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='logo'/></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                   <CountryDropdown/>
                                    <SearchBox/>
                                   <div className='part3 d-flex align-items-center ms-auto'>
                                        <Button className='user me-3'><FiUser/></Button>
                                        <div className='ms-auto cartTab d-flex align-items-center'>
                                            <span className='price'>$3.29</span>
                                           <div className='position-relative ms-2'>
                                           <Button className='user ms-2'><IoBagOutline/></Button>
                                           <span className='count d-flex align-items-center justify-content-center'>1</span>
                                           </div>
                                        </div>
                                   </div> 
                            </div>
                        </div>
                    </div>
                </header>

                <Navigation/>
              
            </div>
        </>
     );
}
 
export default Header;