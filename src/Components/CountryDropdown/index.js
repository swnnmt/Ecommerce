import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5"
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import React from 'react';
import Slide  from '@mui/material/Slide';
  
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal]=useState(false)

    return (
        <>
            <Button className='countryDrop d-flex' onClick={()=>setIsOpenModal(true)} >
                <div className='info d-flex flex-column'>
                    <span className='label'>Your location</span>
                    <span className='name'>VietNam</span>
                </div>
                <span className='ms-auto p-2' ><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={()=> setIsOpenModal(false)} className='locationModal' TransitionComponent={Transition} > 
                <h4>Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close' onClick={()=>setIsOpenModal(false)} ><MdClose/></Button>
                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your area' />
                    <Button><IoSearch /></Button>
                </div>
                <ul className='countryList mt-3'>
                    <li><Button onClick={()=>setIsOpenModal(false)}>Ha Noi</Button></li>
                    <li><Button onClick={()=>setIsOpenModal(false)}>Hai Duong</Button></li>
                    <li><Button onClick={()=>setIsOpenModal(false)}>Hai Phong</Button></li>
                    <li><Button>Nam Dinh</Button></li>
                    <li><Button>Thai Binh</Button></li>
                    <li><Button>Ha Noi</Button></li>
                    <li><Button>Hai Duong</Button></li>
                    <li><Button>Hai Phong</Button></li>
                    <li><Button>Nam Dinh</Button></li>
                    <li><Button>Thai Binh</Button></li>
                    <li><Button>Ha Noi</Button></li>
                    <li><Button>Hai Duong</Button></li>
                    <li><Button>Hai Phong</Button></li>
                    <li><Button>Nam Dinh</Button></li>
                    <li><Button>Thai Binh</Button></li>
                </ul>
            </Dialog>


        </>
    );
}

export default CountryDropdown;