import {useState} from 'react'
import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";
const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantList)

  function filterData(searchText, restaurants) {
    if(searchText ==='') {
      return restaurantList;
    }
    const filteredData = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText))
    return filteredData;
  }

    return (
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={() => {
            
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
            }}>Search</button>{searchText}
        </div>
        <div className="restaurant-list">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.uuid} />
            );
          })}
        </div>
      </>
    );
  }
export default Body;