import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostListData);
  const postList = useLoaderData();
  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;

// In Function based Component,"useEffect" handles side effects like data fetching or event Listner.
//By providing a dependies array.useEffect will only run when specified variables change.Empty array "[]" means the effect runs one time.Also can be used multiples times in one component

// Note : "Return"  a funcion in 'useEffect' allows for cleanup, ideal for removing event listner

// USECALLBACK = is a function in which we want the "reference" is consistantly same.Every time reference does not changes

// USEMEMO: used for calculation , data ....

// CUSTOM HOOKS: it allows you to extract and component logic across multiple .Start with "use". Enables sharing of stateful logic without changing component hieracly.

// LOADER: Loader method can be used to load data from a particular route is executed. The Loader must be return a data that is loaded or promise

// useLoaderData: useLoaderData hook can be used to get the fetched data. Loading state can be also be used
