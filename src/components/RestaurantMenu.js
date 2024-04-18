import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { HAI } from '../utils/demo.js';
import UseRestaurantMenu from '../utils/UseRestaurantMenu.js.js';
import RestaurantCategory from './RestaurantCategory.js';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const[showIndex,setshowIndex]=useState(null)

    const res = UseRestaurantMenu(resId);
    console.log('res', res);

    if (!res) {
        return <div>Loading...</div>;
    }

    const { name = '', cuisines = [], costForTwo = 0, avgRating = 0, cloudinaryImageId } = res.cards[2]?.card?.card?.info || {};
    const { itemCards } = res.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card || { itemCards: [] };

    const category = res.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat) => cat?.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
    console.log('cata',category) 
    return (
        <div className='text-center my-6'>
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className='font-bold text-lg mt-2'>{cuisines.join(',')}</p>
          {category.map((c, index) => (
            <RestaurantCategory
              key={index}
              data={c.card.card}
              showCategory={index === showIndex}
              setshowIndex={() => setshowIndex(index)}
            />
          ))}
        </div>
      );
      
      
};

export default RestaurantMenu;
