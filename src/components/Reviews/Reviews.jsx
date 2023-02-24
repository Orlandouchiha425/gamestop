import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { findAllMessages } from "../../utilities/apiRoutes/messages-api";

export default function Reviews({ setUser, user }) {
  const [data, setData] = useState([]);
  // let {id} = useParams()
  const fetchData = async (evt) => {
    try {
      const response = await findAllMessages();
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loading = () => {
    return <h1>No messages</h1>;
  };

  // const loaded = () => {
  //   return (
  //       <div>
  //         <h1>this is a test</h1>

  //           {
  //               data.map((element,index)=>{
  // <div className="card bg-light mb-3" style="max-width: 18rem;">
  //       <div className="card-header">by pro Gamer:</div>
  //       <div className="card-body">
  //         <h5 className="card-title">{element.title}</h5>
  //         <p className="card-text">
  //          {element.post}
  //         </p>
  //       </div>
  //     </div>
                    
  //               }
  //               )
  //           }
  //       </div>
    
  //   );
  // };
  const loaded = () => {
    return (
      <div>
        {/* <h1>this is a test</h1> */}
        {data.map((element, index) => (
          <div>
             <h1>{element.title}</h1>
          <h1>{element.post}</h1>
          </div>
         
        
        ))}
      </div>
    );
  };
  
  return data && data.title? loading(): loaded(); 
}


{/* <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }} key={index}>
<div className="card-header">by pro Gamer:</div>
<div className="card-body">
  <h5 className="card-title">{element.title}</h5>
  <p className="card-text">{element.post}</p>
</div>
</div> */}