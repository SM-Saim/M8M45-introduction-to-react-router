import { useLoaderData } from "react-router-dom";

const PostDetail = () => {
  const postDetail = useLoaderData();
  const { id, body, title } = postDetail;
  return (
    <div className="useStyle">
      <h3>Post Detail About:{id} </h3>
      <h4>Title: {title}</h4>
      <p>
        <small>Details: {body}</small>
      </p>
    </div>
  );
};

export default PostDetail;
