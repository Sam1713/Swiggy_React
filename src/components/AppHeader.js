import { LOGO_URL } from "../utils/demo";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const AppHeader = () => {
  const [btnName, setBtnName] = useState('login');
  const data=useContext(UserContext)  
  console.log('log',data)

  //Subscribing to the store using a selector
  const cartItems=useSelector((store)=>store.cart.items)
  console.log('cartItems',cartItems)

  const handleClick = () => {
    // Toggle between 'login' and 'logout'
    setBtnName(prevName => prevName === 'login' ? 'logout' : 'login');
  };
  console.log('parcel is not working')
  const onlineStatus=useOnlineStatus()


  return (
    <div className="flex justify-between bg-pink-100 shadow-xl">
      <div>
        <img
          className="w-20 ml-24 rounded-lg"
          src={LOGO_URL}
          alt=""
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
        <li className="px-4">Online Status: {onlineStatus === true ? '✅' : '🛑'}</li>
        <li className="px-4"><Link to='/grocerry'>Grocerry</Link></li>
          <li className="px-4"><Link to='/'>Home</Link></li>
          <li className="px-4"><Link to='/about'>About us</Link></li>
          <li className="px-4"><a href="/contact">Contact us</a></li>
          <li className="px-4">
  <Link to='/cart' className="text-green font-bold width-50">🛒({cartItems.length})</Link>
</li>

          <li className="px-4">{data.loggedInUser}</li>
          <li className="px-4 border border-solid border-black hover:bg-red-600 rounded">

            <button onClick={handleClick}>
              {btnName}
              {console.log('ye worked')}
            </button>
           

          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
