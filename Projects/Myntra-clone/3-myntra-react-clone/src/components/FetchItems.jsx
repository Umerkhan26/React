import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus || {});
  const dispatch = useDispatch();
  // console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addIntialItems(items));
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        // Handle error state or dispatch an action to handle the error
      });

    return () => {
      controller.abort();
    };
  }, []); // "[]" = No dependensies and call or fetch the data  one time

  return <></>;
};

export default FetchItems;
