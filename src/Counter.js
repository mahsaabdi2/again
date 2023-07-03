import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import randomColor from "randomcolor";


function Counter() {
  function getpaymentsmethod(){
    return (
      <select className="payment">
        <option className="payment">card</option>
        <option className="payment">Paypal</option>
        <option className="payment">Cash on Delivery</option>
      </select>
    )


  }
    return (
      <div className="Counter">

          {getpaymentsmethod()}

      </div>
    );
  }
  
  export default Counter;
  