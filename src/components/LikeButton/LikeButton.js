import { useState } from "react";

export  function LikeButton() {
    const [count, setCount] =useState(0)
    const [showInfo, setShowLogin] =useState(true)

    function handleClick(params) {
        setCount(count + 1)
    }
    function subtractClick(params) {
        setCount(count -1)
        
    }

    function doNothing() {
       return 
    }
    // // function showButton(params) {
    // //   if (count<=0) {
        
    // //   }
        
    // }
return(
    <>
   
   <button name="count" onClick={handleClick}>Add To Cart {count}</button> 
   <button onClick={subtractClick} >Remove from cart</button>
   </>
)
}