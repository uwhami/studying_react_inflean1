import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김다정",
    comment: "안녕하세요, 첫 컴포넌트 만들었어요",
  },
  {
    name: "신재홍",
    comment: "안녕하세요, 첫 컴포넌트 만든거 좋아보이네요",
  },
  {
    name: "김다정",
    comment: "후훗",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
