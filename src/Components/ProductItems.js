import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from 'react-icons/io';

import { useContext} from 'react';
import { MyContext } from '../App';
const ProductItems = (props) => {
   
    const context = useContext(MyContext)

    const viewProductDetail=(id)=>{
        context.setIsOpenProductModal(true);
    }
    return ( 
     <>
        <div className={`productItem ${props.itemView}`}>
        <div className="imgWrapper">
            <img onClick={()=>viewProductDetail(1)} src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="img" className="w-100" />
            <span className=" sale badge badge-primary">28%</span>
            <div className="actions">
                <Button onClick={()=>viewProductDetail(1)} ><TfiFullscreen/></Button>
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
       
      
     </>
     );
}
 
export default ProductItems;