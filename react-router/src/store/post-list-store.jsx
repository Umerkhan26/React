import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
// import { useCallback } from "react";
// import { useMemo} from "react";

export const PostList = createContext({
  postList: [],
  // fetching: false,
  addPost: () => {},
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

  // const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
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

  // useEffect(() => {
  //   setFetching(true);
  //   // console.log("Fetch started");

  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //       // console.log("fetch returned");
  //     });

  //   return () => {
  //     console.log("Clening up useEffect");
  //     controller.abort();
  //   };

  //   // console.log("Fetch ended");
  // }, []); // "[]" = No dependensies and call or fetch the data  one time

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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PostListProvider;
