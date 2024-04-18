import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [filtered, setFilteredRestaurants] = useState([]);

 const {setUserName,loggedInUser}=useContext(UserContext)


  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard)
  console.log('restra',restaurants)

  useEffect(() => {
    console.log("hihi");
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.77390&lng=76.64870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data: " + response.status);
        }
        const json = await response.json();

        const restaurants =
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        // console.log(restaurants); // Set fetched data to restaurants state
        setRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  const topRated = () => {
    const topRate = restaurants.filter((res) => res.info.avgRating >= 4.5);
    console.log("top ", topRate); // Move the console.log statement here
    setFilteredRestaurants(topRate);
  };
  const price400 = () => {
    const filteredRestaurants = restaurants.filter((res) => {
      // Extracting the numeric value from the costForTwo string
      const cost = parseInt(res.info.costForTwo.replace(/\D/g, "")); // Extracting only digits
      return cost >= 300; // Assuming 300 is the price limit
    });

    console.log("filtered restaurants:", filteredRestaurants);
    setFilteredRestaurants(filteredRestaurants);
  };

  const handleClick = () => {
    const filteredElements = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(inputVal.toLowerCase())
    );
    setFilteredRestaurants(filteredElements);
  };

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  } else {
    return (
      <div className="container w-80% pl-24">
        <div className="search mt-5 ">
          <input
            className="border-solid border-2 border-slate-950 ml-24 rounded-md"
            value={inputVal}
            onChange={handleChange}
            type="text"
            placeholder="Enter your text...."
          />
          <button
            className="ml-2 bg-green-200 h-7 w-20 rounded-md"
            onClick={handleClick}
          >
            Search
          </button>

          <button
            className="ml-16  bg-red-200 h-7 w-60 rounded-md"
            onClick={() => topRated()}
          >
            TopRated Restaurants
          </button>
          <button
            className="ml-2 bg-green-200 h-7 w-40 rounded-md"
            onClick={() => price400()}
          >
            Price{">"}300
          </button>

          <input className="bg-yellow-200 ml-2" value={loggedInUser} type="text" onChange={(e)=>{setUserName(e.target.value)}}/>
        </div>

        <div className="border borer-solid flex pl-24 flex-wrap shadow-2xl rounded-lg mt-10 shadow-slate-800	">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (

            filtered.map((res, index) => (
              <Link to={`/resMenu/${res.info.id}`} key={res.info.id}>
                {res.info.veg?<RestaurantCardPromoted resData={res}/>:<RestaurantCard resData={res} />}
                
              </Link>
            ))
          )}
        </div>
      </div>
    );
  }
};
export default Body;
