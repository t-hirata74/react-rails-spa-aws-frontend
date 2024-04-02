import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";

function Blogs() {
    const [blogs, setBlogs] = useState();
    useEffect(() => {
      const fetch = async () => {
        const res = await axiosInstance.get("/blogs");
        setBlogs(res.data);
      };
    fetch();
    }, []);

  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ一覧画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>

      <div>
        <ul>
          {blogs?.map((b) => (
            <Link to={`/blogs/${b.id}`} key={b.id}>
              <li>{b.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Blogs;