//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.data.map((p) => {
        console.log('PropsPage', p)
        return (
          <div>
            <Post post={p}/>
          </div>
        )
      })}
    </div>
  );
};

export default PostsPage;

