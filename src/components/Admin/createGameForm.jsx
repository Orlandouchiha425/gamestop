import { useState } from "react"
import { createGames } from "../../utilities/apiRoutes/games-api"
export default function createGameForm(){
const [data, setData]= useState({
title:'',
price:0,
descripton:'',


})

    return(
     <h1>this is create game Form</h1>
    )
}