import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createdMessages } from "../../utilities/apiRoutes/messages-api";
export default function MessageForm({ setUser }) {
  const [data, setData] = useState({
    title: " ",
    post: " ",
    pros: " ",
    cons: " ",
    rating: 1,
  });

  const handleChange = async (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      createdMessages(data);
    } catch (error) {
      setData({ error: "something went Wrong" });
    }
  };

  useEffect(() => {
    handleSubmit();
    handleChange();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Game Title"
          value={setData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label for="exampleFormControlTextarea1">Post</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          required="true"
          onChange={handleChange}
          name="post"
          value={setData.post}
        ></textarea>
        <fieldset>   <br></br>  <button type="submit" className="btn btn-primary">Submit</button>
</fieldset>
      </div>
    </form>
  );
}
