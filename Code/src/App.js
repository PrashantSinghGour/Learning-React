import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import HeadersComponent from "./components/Header";


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
