import Sidebar from "../Components/Sidebar";
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";
import { HiViewGrid } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import ProductItems from "../Components/ProductItems";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Listing = () => {
    const [productView, setProductView] = useState('four')
    const [anchorEl, setAnchorEl] = useState(null);
    const openDropDown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <section className="product_Listing_Page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />

                        <div className="content_right">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" alt="img" className="w-100" style={{ borderRadius: '8px' }} />
                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex align-items-center btnWrapper">
                                    <Button className={productView==='one' && 'act'} onClick={() => setProductView('one')}><IoIosMenu /></Button>
                                    <Button className={productView==='two' && 'act'} onClick={() => setProductView('two')}><HiViewGrid /></Button>
                                    <Button className={productView==='three' && 'act'} onClick={() => setProductView('three')}><CgMenuGridR /></Button>
                                    <Button className={productView==='four' && 'act'} onClick={() => setProductView('four')}><TbGridDots /></Button>

                                </div>
                                <div className="ms-auto showByFilter">
                                    <Button onClick={handleClick}>Show 9 <FaAngleDown /></Button>
                                    <Menu
                                        className="w-100 showPerPageDropdown"
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropDown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>9</MenuItem>
                                        <MenuItem onClick={handleClose}>18</MenuItem>
                                        <MenuItem onClick={handleClose}>24</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <div className="productListing">
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                                <ProductItems itemView={productView} />
                            </div>

                           <div className="d-flex align-items-center justify-content-center mt-1">
                                    <Stack spacing={2}>               
                                        <Pagination count={10} size="large"/>
                                    </Stack>
                           </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

export default Listing;