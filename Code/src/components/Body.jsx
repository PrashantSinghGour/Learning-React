import { useState } from "react";
import restaurants from "../../restaurants";
import Card from "./Card";


const filterRestaurant = (searchText) => {

  if (!searchText)
    return restaurants;

  return restaurants.filter(restaurant => {
    return restaurant.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
  });
}


const Body = () => {

  const [searchInput, setSearchInput] = useState('');
  const [restaurantList, setRestaurantList] = useState(restaurants)

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="search" className="search-input" value={searchInput} onChange={(e) => {
          setSearchInput(e.target.value);
        }} />
        <button className="search-btn" onClick={() => {
          setRestaurantList(filterRestaurant(searchInput));
        }}>Search</button>
      </div>

      <div className="body">
        {
          restaurantList.map(restaurant => <Card {...restaurant.data} key={restaurant.data.id} />)
        }
      </div>
    </>
  );
}

export default Body;
