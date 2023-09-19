import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { userId, id, title } = post;
  return (
    <div className="useStyle">
      <h2>User Id:{id}</h2>
      <p>Title: {title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
    </div>
  );
};

export default Post;
