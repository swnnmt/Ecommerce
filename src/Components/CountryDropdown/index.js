import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MdClose } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [originalCountryList, setOriginalCountryList] = useState([]);
    const [countryList, setCountryList] = useState([]);
    const [nowCountry, setNowCountry] = useState([]);
    const [keyword, setKeyword] = useState(""); // State cho keyword

    const context = useContext(MyContext);

    const selectCountry = (item) => {
        console.log(item.country);
        setNowCountry(item.country);
        setIsOpenModal(false);
        setKeyword("");
    };

    useEffect(() => {
        const countries = context.countryList;
        setCountryList(countries);
        setOriginalCountryList(countries); // Lưu danh sách quốc gia ban đầu
    }, [context.countryList]);

    const filterList = (e) => {
       
        setKeyword(e.target.value.toLowerCase());

        if ( keyword !== "") {
            const list = originalCountryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            });
            setCountryList(list);
        } else {
            setCountryList(originalCountryList); // Khôi phục lại danh sách ban đầu
        }
    };

    // Khi mở modal, đặt lại countryList về originalCountryList
    const handleOpenModal = () => {
        setIsOpenModal(true);
        setCountryList(originalCountryList); // Đặt lại danh sách quốc gia khi mở modal
        setKeyword(""); // Reset giá trị input
    };

    return (
        <>
            <Button className='countryDrop d-flex' onClick={handleOpenModal}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your location</span>
                    {/*  */}
                    <span className='name'>{nowCountry}</span>
                </div>
                <span className='ms-auto p-2'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
                <h4>Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close' onClick={() => setIsOpenModal(false)}><MdClose /></Button>
                <div className='headerSearch w-100'>
                    <input
                        type='text'
                        placeholder='Search your area'
                        value={keyword} // Đặt giá trị của input từ state keyword
                        onChange={filterList}
                    />
                    <Button><IoSearch /></Button>
                </div>
                <ul className='countryList mt-3'>
                    {
                        countryList?.length !== 0 && countryList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button onClick={() => selectCountry(item)}>
                                        {item.country}
                                    </Button>
                                </li>
                            );
                        })
                    }
                </ul>
            </Dialog>
        </>
    );
}

export default CountryDropdown;
