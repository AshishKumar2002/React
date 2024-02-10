import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState } from "react";
const Body = () => {
 let [listofRestaurant, setlistofRestaurant] = useState(reslist);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
          let filterlist= listofRestaurant = listofRestaurant.filter((res) => res.data.avgRating >= 4.5);
           setlistofRestaurant(filterlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        ,
      </div>
    </div>
  );
};
export default Body;
