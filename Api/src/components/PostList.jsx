import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // console.log(postList);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    // console.log("Fetch started");

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
        // console.log("fetch returned");
      });

    return () => {
      console.log("Clening up useEffect");
      controller.abort();
    };

    // console.log("Fetch ended");
  }, []); // "[]" = No dependensies and call or fetch the data  one time

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;

// In Function based Component,"useEffect" handles side effects like data fetching or event Listner.
//By providing a dependies array.useEffect will only run when specified variables change.Empty array "[]" means the effect runs one time.Also can be used multiples times in one component

// Note : "Return"  a funcion in 'useEffect' allows for cleanup, ideal for removing event listner

// USECALLBACK = is a function in which we want the "reference" is consistantly same.Every time reference does not changes

// USEMEMO: used for calculation , data ....

// CUSTOM HOOKS: it allows you to extract and component logic across multiple .Start with "use". Enables sharing of stateful logic without changing component hieracly.
