import { useDispatch } from "react-redux";
import { CDL_URL } from "../utils/demo"
import { addItem } from "../utils/cartSlice";
const ItemList=({data})=>{

  const dispatch=useDispatch();

  const handleCartItem=(item)=>{
    dispatch(addItem(item))
  }
    return (
        <div>
          <ul>
            {data.map((d) =>
              <div key={d.card.info.id} className="p-2 m-2 border-gray-200 border-b-4 text-left">
                <div className="item-center">
                  {/* <button className="float-right">Add</button> */}
                  <div className="relative h-full">
                    <img className="w-20 float-right rounded-md shadow-xl transition ease-out pointer transform hover:scale-110 cursor-pointer" src={CDL_URL + d.card.info.imageId} alt="" />
                    <button className="h-8 bg-gradient-to-r from-yellow-300 to-yellow-500 text-white px-3 py-1 rounded-md shadow-md absolute my-16 right-3"onClick={()=>handleCartItem(d)}>Add</button>
                    {/* Clearfix */}
                    <div className="clearfix"></div>
                  </div>
                  <div className="w-20%">
                    <span className="font-bold">Name: {d.card.info.name}</span>
                    <span>- ₹{d.card.info.price}</span>
                  </div>
                </div>
                <div>
                  <span>Category: {d.card.info.category}</span>
                </div>
                <div>
                  <span>Description: {d.card.info.description}</span>
                </div>
              </div>
            )}
          </ul>
        </div>
      );
      
}
export default ItemList