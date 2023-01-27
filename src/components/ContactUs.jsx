import React,{useState} from "react";
import "../style/ContactUs.css"
const ContactUs = () => {
    const [method, setMethod] = useState("email");

    const handleMethodChange = (e) => {
      setMethod(e.target.value);
    };

    return (

        <div>
        <img src="https://images.squarespace-cdn.com/content/v1/5cf884742d9356000143ba5a/1559872083612-787AH3EPOTXELUC0ALDR/banner-13.png?format=2500w" alt="banner" className="banner-image"/>
        <h2 className="banner-text">Contact Us</h2>
        <p className="sub-header">Have a question or need assistance? We are here to help you with whatever you need with your pillows.</p>

<div className="container">
  <div className="form-container">
        <form>
          <label>Your inquiry?</label>
          <select>
            <option>Orders</option>
            <option>Registration</option>
            <option>Refund</option>
            <option>General Questions</option>
          </select>
          <label>Method you want to be reached via</label>
          <select onChange={handleMethodChange}>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
          {method === "email" ? (
            <>
              <label>Email</label>
              <input type="email" />
            </>
          ) : (
            <>
              <label>Phone Number</label>
              <input type="tel" />
            </>
          )}
          <label>Please provide details</label>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </form>
  </div>
  <div className="card-container">
    <div className="card">
    <img src= "https://images.emojiterra.com/google/android-10/512px/1f3e2.png" alt="card-image" className="card-image" />

      <h3>Our Main Office</h3>
      <p>1000 Fullstack Ave </p>
      <p>Fullstackville USA 44102</p>
    </div>
    <div className="card">
    <img src= "https://thumbs.dreamstime.com/b/smiling-email-icon-quick-easy-messenger-emoji-envelope-letter-mailing-emoji-emoticon-stock-vector-illustration-smiling-162557432.jpg" alt="card-image" className="card-image" />

      <h3>Email</h3>
      <p>Cloud9@yahoo.com</p>
    </div>
    <div className="card">
    <img src= "https://fsymbols.com/images/phone-icon.png" alt="card-image" className="card-image" />

      <h3>Phone</h3>
      <p>216-235-1234</p>
    </div>
  </div>
</div>
</div>

    );
  };

  export default ContactUs;
