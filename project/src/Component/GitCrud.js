import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GitCrud() {
  // awluay in get to display info we sould use "aarray"************
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Atim/display_all_graduate_student")
      .then((res) => {
        console.log(res.data);
        //  Way one to display info in browser not console
        // setData(res.data[0].title);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      GitCrud
      <h1>Hello</h1>
      {/* Way Two to display info */}
      <ul>
        {data.map((e) => (
          <li>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}
