import * as usersAPI from './users-api'
//we are importing everything to check if token exists from users-api.js 


//SignUp function 
export async function signUp(userData){
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token)
}

//Login

export async function login(credentials){
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token',token)
    return getUser()
}

//get token

export function getToken(){
    const token = localStorage.getItem('token');
    if(!token) return null;
    const payload = JSON.parse(window.atob(token.split('.')[1]))
    if(payload.exp<Date.now() / 1000){
        localStorage.removeItem('token')
        return null;
    }
    return token;
}


//getUser
export function getUser(){
    const token = getToken();
    return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
}


//logout

export function logout(){
    localStorage.removeItem('token')
}

//checkToken

export function checkToken(){
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr))
}