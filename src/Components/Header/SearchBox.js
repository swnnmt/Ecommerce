import {IoSearch} from "react-icons/io5"
import Button from '@mui/material/Button';
const SearchBox = () => {
    return (
        <div className='headerSearch'>
            <input type='text' placeholder='Your search' />
            <Button><IoSearch /></Button>
        </div>
    );
}

export default SearchBox;