import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      MyPosts
      <div>
        <textarea></textarea>
        <button>New post</button>
        <button>Remove</button>
      </div>
      <div>
        <Post message="hi man" />
        <Post message="today is a good day" />
        <Post message=":D" />
      </div>
    </div>
  );
};

export default MyPosts;
