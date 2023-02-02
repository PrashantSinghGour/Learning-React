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

    return () => {
      //this function is called when component destroyed.
    }
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
      <div className="search-container" key={'search-area'}>
        <input type="text" placeholder="search" className="search-input" value={searchInput} onChange={(e) => {
          setSearchInput(e.target.value);
        }} />
        <button className="search-btn" onClick={() => {
          setFilteredRestaurants(filterRestaurant(searchInput, restaurants));
        }}>Search</button>
      </div>

      {<div className="body" key={'body-area'}>
        {
          !filteredRestaurants?.length ? Array(20).fill('').map((item, index) => <Shimmer key={`${index}`} />) : filteredRestaurants?.map(restaurant => <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id}><Card {...restaurant.data} /></Link>)
        }
      </div>}
    </>
  );
}

export default Body;
