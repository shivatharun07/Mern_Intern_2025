import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectAPI = () => {
  const [postsParameter, setPostsParameter] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPostsParameter(res.data);
      }).then(() => {
        console.log(postsParameter);
      })
      .catch(() => {
        console.log("Can't get API Data");
      });
  },[]);
  return (
    <div>
      <h2>UseEffectAPI Component</h2>
      <p>It is going to fetch data from JSON Typicode Placeholder API.</p>
      <ol>
        <p>The API Values which fetched was</p>
        {postsParameter.map((post) => (
          <li key={post.id}>{post.title}</li>

        ))}
      </ol>
    </div>
  );
};
export default UseEffectAPI;
