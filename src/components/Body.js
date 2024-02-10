import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
const Body = () => {
  let [listofRestaurant, setlistofRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurant
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterlist = (listofRestaurant = listofRestaurant.filter(
              (res) => res.data.avgRating >= 4.5
            ));
            setlistofRestaurant(filterlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((restaurants) => (
          <RestaurantCard key={restaurants.data.id} resData={restaurants} />
        ))}
        ,
      </div>
    </div>
  );
};
export default Body;
