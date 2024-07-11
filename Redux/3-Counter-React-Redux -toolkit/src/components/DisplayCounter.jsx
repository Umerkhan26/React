import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter); // hook to get sliceor part of store

  return <p className="lead mb-4">Counter current value:{counterVal}</p>;
};

export default DisplayCounter;
