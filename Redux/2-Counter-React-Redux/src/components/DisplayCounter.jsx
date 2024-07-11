import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter); // hook to get sliceor part of store

  return <p className="lead mb-4">Counter current value:{counter}</p>;
};

export default DisplayCounter;
