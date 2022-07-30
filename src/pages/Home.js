import createGameForm from "../components/Admin/createGameForm"
export default function Home({user}){
    

    return(
    //   <div><createGameComponent user={user}/></div>
        
    <h1>{createGameForm.title}</h1>
    )
}