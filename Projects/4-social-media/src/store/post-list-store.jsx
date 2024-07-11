import { useReducer } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(), // Generate random "ID"
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    // console.log(`Delete post called for:${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Lahore",
    body: "Hi Friends, I am going to lahore for vacation.Hope to enjoy alot.Peace out",
    reactions: 9,
    userId: "user-6",
    tags: ["vacation", "joy", "lahore"],
  },
  {
    id: "2",
    title: "Finding A Place",
    body: "Hi Frinds, I am  Finding a good apartment in peshawer.If you find please let me know",
    reactions: 12,
    userId: "user-16",
    tags: ["Peshawer", "sad", "belive"],
  },
];

PostListProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PostListProvider;
