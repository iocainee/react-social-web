import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/get-kino-vod-users-avatar/33806/2740729-54-270367.jpg/46x73" />
      post 1
      <div>
        <span>{props.message}</span>
      </div>
    </div>
  );
};

export default Post;
