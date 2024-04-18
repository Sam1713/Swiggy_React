import { useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
const Cart=()=>{
    const dispatch=useDispatch()
    const cartItems=useSelector((store)=>store.cart.items)
    const clear=()=>{
        dispatch(clearCart())
    }
return(
    
    <div >
                <h1 className="m-auto w-2 font-bold my-10">Cart</h1>
        <div className="flex justify-center">
            {cartItems.length>0?<button onClick={()=>clear()} className="h-8 bg-gradient-to-r from-yellow-300 to-yellow-500  px-3 py-1 rounded-md shadow-md absolute my-10 right-3bg-black text-white mx-20 ">Clear cart</button>:''}
        </div>
        <div className="w-6/12 m-auto my-20">
            {console.log('items',cartItems)}
            {cartItems.length === 0 ? (
  <h1 className="text-red-500 text-center font-bold text-3xl">Your cart is empty. Add something.</h1>
) : (
  <ItemList data={cartItems}></ItemList>
)}
        </div>
    </div>
)
}
export default Cart