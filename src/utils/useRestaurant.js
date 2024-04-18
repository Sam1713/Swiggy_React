import React, { useState, useEffect } from "react";

const UseRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filtered, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      console.log('sdfsdfs');
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.77390&lng=76.64870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
                if (!response.ok) {
                    throw new Error('Failed to fetch data: ' + response.status);
                }
                const json = await response.json();
                const restaurants = json.data.cards[1].card.card.gridElements.restaurants;
                setRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log('filtered:', filtered);
    }, [filtered]); // Log filtered whenever it changes

    return [restaurants, filtered];
};

export default UseRestaurants;
