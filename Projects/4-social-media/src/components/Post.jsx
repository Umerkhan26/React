import PropTypes from "prop-types";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags, index) => (
          <span key={index} className="badge text-bg-primary hashtag">
            {tags}
          </span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} peoples
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
