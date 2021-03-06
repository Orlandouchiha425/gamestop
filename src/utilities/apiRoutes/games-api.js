import { sendRequest } from "../users/send-request"

const BASE_URL = '/api/games'

export async function createGames(gameData){
    return sendRequest( `${BASE_URL}`,'POST',gameData)
}

export async function deleteGames(gameData){
    return sendRequest(`${BASE_URL}/${gameData}`,'DELETE',gameData)
}

export async function getAllGames(){
    return sendRequest(`${BASE_URL}`,'GET')
}

export async function editGames(gameEdit){
    return sendRequest(`${BASE_URL}/${gameEdit}`,'PUT',gameEdit)
}


export async function getGames(gameOneGame){
    return sendRequest(`${BASE_URL}/${gameOneGame}`,'GET')
}

export function getUserGames(usersGames){
    return sendRequest(`${BASE_URL}/${usersGames}`)
}