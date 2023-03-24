import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findAllMessages } from "../../utilities/apiRoutes/messages-api";
import DeleteReview from "./DeleteReview";
export default function Reviews({ setUser, user }) {
  const [data, setData] = useState([]);

  let { id } = useParams();

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
        {/* <h1>this is a test</h1> */}
        {data.map((element) => (
          <div>
            <h1>{element.title}</h1>
            <h1>{element.post}</h1>
            <DeleteReview />
          </div>
        ))}
      </div>
    );
  };

  return data && data.title ? loading() : loaded();
}
