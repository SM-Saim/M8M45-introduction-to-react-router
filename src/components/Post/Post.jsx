import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { userId, id, title } = post;

  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="useStyle">
      <h2>User Id:{id}</h2>
      <p>Title: {title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <Link to={`/post/${id}`}>
        <button>See Details</button>
      </Link>
      <button onClick={handleDetails}>Click to See Details</button>
    </div>
  );
};

export default Post;
