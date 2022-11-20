import { useState } from "react";

export  function LikeButton() {
    const [count, setCount] =useState(0)

    function handleClick(params) {
        setCount(count + 1)
    }
    function subtractClick(params) {
        setCount(count -1)
        
    }

 
    // }
return(
    <>
   
   <button name="count" onClick={handleClick}>Add To Cart {count}</button> 
   <button onClick={subtractClick} >Remove from cart</button>
   </>
)
}