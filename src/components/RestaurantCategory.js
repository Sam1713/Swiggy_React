import React, { useState } from 'react';
import ItemList from './ItemList';
const RestaurantCategory = ({data,showCategory,setshowIndex}) => {
    // const [showCategory,setShowCategory]=useState(false)

 // Assuming categoryName is a prop you want to display
 const handleClick=()=>{
  setshowIndex(prevState => !prevState);
}
  console.log('welcome',data)
    return (
<div className='w-6/12 m-auto my-4 bg-gray-50 shadow-lg items-center p-4'>
          <div className=' flex justify-between'>
           <span className='font-bold '>{data.title}({data.itemCards.length})</span>
           {showCategory?<span className='cursor-pointer' onClick={handleClick}>⬆️</span>:<span className='cursor-pointer' onClick={handleClick}>🔽</span>}
           </div>
          {showCategory&&<ItemList data={data.itemCards}/>}
          
        </div>
    );
};

export default RestaurantCategory;
