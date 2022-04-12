import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Badge } from '@mui/material';
import { cartContext } from "./CartContext";
import { useContext } from 'react';

const CartWidget = () =>  {
    const useCartContext = useContext(cartContext);
    const { prodsTotal } = useCartContext;
    
    return(
        <>
            <Badge badgeContent={prodsTotal} color="info">
                <AddShoppingCartOutlinedIcon />
            </Badge>
        </>
    )
}
export default CartWidget