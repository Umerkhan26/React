import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
// import { useCallback } from "react";
// import { useMemo} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  // Using callback
  // const deletePost = useCallback((postId) => {
  //   dispatchPostList({
  //     type: "DELETE_POST",
  //     payload: {
  //       postId,
  //     },
  //   });
  // }, [ dispatchPostList])

  // Using useMemo
  // const arr = [1,2,3,4,5,6,9]
  // const sortedArr = useMemo(() => arr.sort(), [arr])
  //Note: "useCallback and useMemo" used for optimazations

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PostListProvider;
