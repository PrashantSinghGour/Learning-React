import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import restaurants from "../../restaurants";
import { API_URL } from "../constants";
import Card from "./Card";
import { Shimmer } from "./Shimmer";


const filterRestaurant = (searchText, allRestaurant) => {

  if (!searchText)
    return allRestaurant;

  return allRestaurant.filter(restaurant => {
    return restaurant.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
  });
}




const Body = () => {

  const [searchInput, setSearchInput] = useState('');
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      let data = await fetch(API_URL).then((res) => res);
      const json = await data.json();
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="search" className="search-input" value={searchInput} onChange={(e) => {
          setSearchInput(e.target.value);
        }} />
        <button className="search-btn" onClick={() => {
          setFilteredRestaurants(filterRestaurant(searchInput, restaurants));
        }}>Search</button>
      </div>

      {<div className="body">
        {
          !filteredRestaurants?.length ? Array(20).fill('').map((item) => <Shimmer />) : filteredRestaurants?.map(restaurant => <Link to={`/restaurant/${restaurant.data.id}`}><Card {...restaurant.data} key={restaurant.data.id} /></Link>)
        }
      </div>}
    </>
  );
}

export default Body;
