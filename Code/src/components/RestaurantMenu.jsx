import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL, MENU_URL } from "../constants";

const RestaurantMenu = () => {

  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();

  const fetchData = async () => {
    let data = await fetch(`${MENU_URL}${id}`);
    data = await data.json();
    setRestaurant(data?.data);
    console.log("🚀 ~ file: RestaurantMenu.jsx:13 ~ useEffect ~ data", data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="restaurant">
      <img src={`${IMG_CDN_URL}/${restaurant?.cloudinaryImageId}`} alt="" />
      <h1>Restaurant id: {id}</h1>
      <h3>{restaurant?.name}</h3>
      <div>
        <ul>
          {restaurant?.menu?.items ? Object.values(restaurant?.menu?.items).map((item) => <li key={item.id}>{item?.name}</li>) : ''}
        </ul>
      </div>
    </div>
  );
}


export default RestaurantMenu;
