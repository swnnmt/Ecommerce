import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from 'react-icons/io';
const ProductItems = () => {
    return ( 
        <div className="item productItem">
        <div className="imgWrapper">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="img" className="w-100" />
            <span className=" sale badge badge-primary">28%</span>
            <div className="actions">
                <Button><TfiFullscreen/></Button>
                <Button><IoMdHeartEmpty/></Button>
            </div>
        </div>
        <div className="info">
            <h4>All Natural Italian-Style Chicken Meatballs</h4>
            <span className="text-success d-block">In Stock</span>
            <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
            <div className="d-flex">
                <span className="oldPrice">$20.00</span>
                <span className="salePrice text-danger ms-3">$14.00</span>
            </div>
        </div>
    </div>
     );
}
 
export default ProductItems;