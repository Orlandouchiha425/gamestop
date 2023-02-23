import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findAllMessages } from "../../utilities/apiRoutes/messages-api";

export default function Reviews({ setUser, user }) {
  const [data, setData] = useState([]);

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
    return <h1>No games to Display</h1>;
  };

  const loaded = () => {
    return (
        <div>
            {
                data.map((element,index)=>{
  <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">by pro Gamer:</div>
        <div class="card-body">
          <h5 class="card-title">{element.title}</h5>
          <p class="card-text">
           {element.post}
          </p>
        </div>
      </div>
                    
                })
            }
        </div>
    
    );
  };
}
