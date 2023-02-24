import { sendRequest } from "../users/send-request"
const BASE_URL = '/api/messages'
// const { findAllMessages, createMessages, deleteMessages, findMessageByID, editMessages} =require('../../controllers/api/messages')
export async function  createdMessages(message){
    return sendRequest(`${BASE_URL}/${message}`,'POST', message)
}

export async function deleteMessages(messagID) {
    return sendRequest(`${BASE_URL}/${messagID}`,"DELETE")
}

export async function findAllMessages(id) {
    return sendRequest(`${BASE_URL}/${id}`,)
}

export async function editMessages(gameEdit, edits) {
    return sendRequest(`${BASE_URL}/${gameEdit}`, "PUT",edits)
}

export function getUserMessages(userMessages){
    return sendRequest(`${BASE_URL}/${userMessages}`,"GET",null)
}

export async function findMessageById(message) {
    return sendRequest(`${BASE_URL}/${message}`)
}

