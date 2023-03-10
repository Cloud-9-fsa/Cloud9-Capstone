import React from "react";
import { Link } from "react-router-dom";
import "../style/Shop.css";

export const Shop = () => {
  return (
    <div className="main">
      <div className="CampaignImg">
        <div className="picmain">
          <img src="https://images.unsplash.com/flagged/photo-1553802922-28e2f719977d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
        </div>
      </div>

      <div className="LinkHeader">
        <div className="overHere">
          <Link to="/shop/pet">
            <div className="textit1">
              <h2>Pet Pillows</h2>
            </div>
            <img
              className="picshop1"
              src="https://cdn.shopify.com/s/files/1/0616/1331/0131/products/0c8c4e6eddb70f14e41f7aa38dd05400_1080x.jpg?v=1666880239"
            ></img>
          </Link>
        </div>

        <div className="overHere">
          <Link to="/shop/sleep">
            <div className="textit2">
              <h2>Sleep</h2>
            </div>
            <img
              className="picshop2"
              src="https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202305/0011/laurel-down-duvet-and-pillow-insert-o.jpg"
            ></img>
          </Link>
        </div>

        <div className="overHere">
          <Link to="/shop/decorative">
            <div className="textit3">
              <h2>Decorative</h2>
            </div>
            <img
              className="picshop3"
              src="https://cb.scene7.com/is/image/Crate/CresteCrdryIvoryPillowsFSSF22/$web_pdp_main_carousel_high$/220818095037/creste-ivory-corduroy-throw-pillows-by-athena-calderone.jpg"
            ></img>
          </Link>
        </div>

        <div className="overHere">
          <Link to="/shop/outdoor">
            <div className="textit4">
              <h2>Outdoor</h2>
            </div>
            <img
              className="picshop4"
              src="https://cdn.shopify.com/s/files/1/0261/9479/collections/all-products-collection_850x.jpg?v=1588200598"
            ></img>
          </Link>
        </div>

        <div className="overHere">
          <Link to="/shop/accessories">
            <div className="textit5">
              <h2>Accessories</h2>
            </div>
            <img
              className="picshop5"
              src="https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202242/0046/chambers-italian-600-thread-count-percale-duvet-cover-sham-o.jpg"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
};
