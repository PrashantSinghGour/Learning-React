import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from "./restaurants";

const Title = () => (
  <a href="/">
    <img alt="logo" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" className="logo" />
  </a>
);



const HeadersComponent = () => {
  return (
    <div className="header">
      <Title />
      <div
        className="nav-items" >
        <ul>
          <li >Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const burgerKing = {
  name: "Burger King",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f",
  cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
  rating: '4.2'
}

const Card = (props) => {

  const { name, cuisines, avgRating, cloudinaryImageId } = props;
  return (
    <div className="card">
      <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt="hotel_img"></img>
      <h3>{name}</h3>
      <p>{cuisines.join(', ')}</p>
      <p>{avgRating} stars</p>
    </div>
  )
}


const Body = () => {
  return (
    <div className="body">
      {
        restaurants.map(restaurant => <Card {...restaurant.data} key={restaurant.data.id} />)
      }
    </div>
  );
}

const Footer = () => {
  return (
    <h4>This is footer!</h4>
  )
}

const AppLayout = () => {
  return (
    <div className="container">
      <HeadersComponent />
      <Body></Body>
      {Footer()}
    </div>
  )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />); // from functional component
