import { CDL_URL } from "../utils/demo";

const RestaurantCard = (props) => {
  const { resData, show } = props;
  console.log('showLabel',show)

  if (!resData || !resData.info) {
    return <div>Error: Restaurant data is missing or invalid.</div>;
  }

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = resData.info;

  return (
    <div className="flex">
      {show && (
        <label className="absolute bg-black text-white m-6 p-2 z-10 rounded-full border border-white">Veg</label>
      )}
      <div className="res-card m-6 w-50 p-4 w-[200] h-90 shadow-2xl shadow-slate-600 transition ease-in-out duration-300 transform bg-[#f0f0f0] hover:-translate-y-1 hover:scale-110 hover:bg-zinc-500">
        <img
          className="res-img object-cover h-300 rounded-md shadow-xl"
          src={`${CDL_URL}${cloudinaryImageId}.png`}
          alt="food"
        />
        <div className="items">
          <h3 className="text-sm font-bold h-5 overflow-hidden">{name}</h3>
          <hr></hr>
          <p className="cuisines text-sm max-h-5 overflow-hidden">{cuisines.join(", ")}</p>
          <hr></hr>
          <p>❇️{avgRating}</p>
          <hr></hr>
          <h4 className="font-bold">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (res) => {
  return (props) => {
    console.log('pros',props)
    return <RestaurantCard {...props} show />;
  };
};

export default RestaurantCard;
