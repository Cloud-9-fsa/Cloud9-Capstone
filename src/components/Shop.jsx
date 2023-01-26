import React from "react";
import { useAuth } from "../context/UseAuth";
import { Link } from "react-router-dom";

export const Shop = () => {

  return (
    <div>
      <div className="CampaignImg">
      <h1>Welcome To Cloud9</h1>
      <img src="https://images.unsplash.com/flagged/photo-1553802922-28e2f719977d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
      </div>


      <div>
        <div className="LinkHeader">
          <h2>Pet Pillows</h2>
        <Link to="/petpillows"><img src="https://cdn.shopify.com/s/files/1/0616/1331/0131/products/0c8c4e6eddb70f14e41f7aa38dd05400_1080x.jpg?v=1666880239"></img></Link>
        </div>

      <div className="LinkHeader">
      <h2>Sleep</h2>
      <Link to="/sleep"><img src="https://cb.scene7.com/is/image/Crate/CresteCrdryIvoryPillowsFSSF22/$web_pdp_main_carousel_high$/220818095037/creste-ivory-corduroy-throw-pillows-by-athena-calderone.jpg"></img></Link>
      </div>

      <div className="LinkHeader">
      <h2>Decorative</h2>
      <Link to="/decorative"><img src="https://cb.scene7.com/is/image/Crate/CresteCrdryIvoryPillowsFSSF22/$web_pdp_main_carousel_high$/220818095037/creste-ivory-corduroy-throw-pillows-by-athena-calderone.jpg"></img></Link>
      </div>
      
      <div className="LinkHeader">
      <h2>Outdoor</h2>
      <Link to="/outdoor"><img src="https://images.unsplash.com/flagged/photo-1553802922-28e2f719977d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img></Link>
      </div>
      
      <div className="LinkHeader">
      <h2>Accessories</h2>
      <Link to="/accessories"><img src="https://images.unsplash.com/flagged/photo-1553802922-28e2f719977d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img></Link>
      </div>

      </div>
    </div>
  );
};
