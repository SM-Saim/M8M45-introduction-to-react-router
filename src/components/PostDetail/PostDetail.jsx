import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const postDetail = useLoaderData();
  const navigate = useNavigate();

  const hancleGoBack = () => {
    navigate(-1);
  };

  const { id, body, title } = postDetail;
  return (
    <div className="useStyle">
      <h3>Post Detail About:{id} </h3>
      <h4>Title: {title}</h4>
      <p>
        <small>Details: {body}</small>
      </p>
      <button onClick={hancleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetail;
