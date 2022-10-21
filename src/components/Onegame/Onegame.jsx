import {getGames} from "../../utilities/apiRoutes/games-api"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function Show() {
    let {id} = useParams()
    return(
    <h1>Hello {id}</h1>
    )
}