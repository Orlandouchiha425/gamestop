import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <div className="removeFooter">
    <footer className=" mw-100 footer navbar fixed-bottom d-flex justify-content-around">
      <div className="rowDiv">
        <div className="row1">
          <div className="row1Links">
            <strong><span>Get Help</span></strong>
            <ul>
              <li>Frequently Asked Questions</li>
              <li>Order Status</li>
              <li>PowerUp Rewards Credit Card</li>
            
            </ul>
          </div>
        </div>
        <div className="row2">
          <div className="row2Links">
           <strong><span>About Us</span></strong> 
            <ul>
              <li>Careers</li>
              <li>Game Informer</li>
              <li>Affiliates</li>
             
            </ul>
          </div>
        </div>
        <div className="row3">
          <div className="row3Links">
           <strong><span>Legal Privacy</span></strong> 
            <ul>
              <li>Conditions of Use</li>
              <li>PowerUp Rewards Terms & Conditions</li>
              <li>Do Not Sell Or Share My Personal Information</li>
 
            </ul>
          </div>
        </div>
        <div className="row4">
          <div className="row4Links">
            Sign Up <br/>
            Get Exclusive Promotions, Coupons, and the Latest Events

<input type="text" placeholder="Search Site"  className="searchBar"  />

          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
