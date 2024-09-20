import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
const CountryDropdown = () => {
    return (
        <>
            <Button className='countryDrop d-flex' >
                <div className='info d-flex flex-column'>
                    <span className='label'>Your location</span>
                    <span className='name'>VietNam</span>
                </div>
                <span className='ms-auto p-2' ><FaAngleDown /></span>
            </Button>

        </>
    );
}

export default CountryDropdown;