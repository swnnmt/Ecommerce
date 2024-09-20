import Logo from '../../assest/img/logo.jpg'
import { Link } from 'react-router-dom';
import CountryDropdown from '../../Components/Header/CountryDropdown';
import {IoSearch} from "react-icons/io5"
import Button from '@mui/material/Button';

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
                                   {/* header search start */}
                                   <div className='haederSearch'>
                                        <input type='text' placeholder='your search' />
                                      <Button><IoSearch/></Button>
                                   </div>
                                    {/* header search end */}
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
     );
}
 
export default Header;