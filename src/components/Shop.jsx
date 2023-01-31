import React from "react";
import { Link } from "react-router-dom";
import "../style/Shop.css";

export const Shop = () => {
  return (
    <div className="main">
      <div className="CampaignImg">
        <h1>Welcome To Cloud9</h1>
        <img
          className="picmain"
          src="https://images.unsplash.com/flagged/photo-1553802922-28e2f719977d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ></img>
      </div>

      <div className="LinkHeader">
        <h2 className="textit">Pet Pillows</h2>
        <Link to="/shop/pet">
          <img
            className="picshop"
            src="https://cdn.shopify.com/s/files/1/0616/1331/0131/products/0c8c4e6eddb70f14e41f7aa38dd05400_1080x.jpg?v=1666880239"
          ></img>
        </Link>

        <h2 className="textit">Sleep</h2>
        <Link to="/shop/sleep">
          <img
            className="picshop"
            src="https://cb.scene7.com/is/image/Crate/CresteCrdryIvoryPillowsFSSF22/$web_pdp_main_carousel_high$/220818095037/creste-ivory-corduroy-throw-pillows-by-athena-calderone.jpg"
          ></img>
        </Link>

        <h2 className="textit">Decorative</h2>
        <Link to="/shop/decorative">
          <img
            className="picshop"
            src="https://cb.scene7.com/is/image/Crate/CresteCrdryIvoryPillowsFSSF22/$web_pdp_main_carousel_high$/220818095037/creste-ivory-corduroy-throw-pillows-by-athena-calderone.jpg"
          ></img>
        </Link>

        <h2 className="textit">Outdoor</h2>
        <Link to="/shop/outdoor">
          <img
            className="picshop"
            src="https://images.unsplash.com/flagged/photo-1553802922-28e2f719977d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></img>
        </Link>

        <h2 className="textit">Accessories</h2>
        <Link to="/shop/accessories">
          <img
            className="picshop"
            src="https://images.unsplash.com/flagged/photo-1553802922-28e2f719977d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></img>
        </Link>
      </div>
    </div>
  );
};
