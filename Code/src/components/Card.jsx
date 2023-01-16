import { IMG_CDN_URL } from "../constants";

const Card = (props) => {

  const { name, cuisines, avgRating, cloudinaryImageId } = props;
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}/${cloudinaryImageId}`} alt="hotel_img"></img>
      <p className="name">{name}</p>
      <p className="cuisine">{cuisines?.join(', ')}</p>
      <p>{avgRating} stars</p>
    </div>
  )
}

export default Card;
