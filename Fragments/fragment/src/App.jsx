import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Salad", "Dates", "Roti", "Rice", "Milk", "Honey", "Ghee"];
  // let foodItems = []; // Used for "if else"

  // let textStateArr = useState("Food Item Entered bu user"); //when we decleare "useState" it return "array" which has two elements one is "CurrValue" and the other is "method or function" which we can edit.

  // let [textToShow, setTextState] = useState(); //short form

  let [foodItems, setFoodItems] = useState([]);

  // let textToShow = textStateArr[0]; //value: returns always Values
  // let setTextState = textStateArr[1]; // Method:to change app or function.in which we can set "state"

  // console.log(`Current value of textStae:${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]; // "..." to add array current values
      setFoodItems(newItems);
      // console.log("Food value entered is " + newFoodItem);
    }
    // console.log(event);
    // textToShow = event.target.value;
    // // setTextState(event.target.value); // it will set the value and will re-pend the app component
  };

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }
  // Note:In This case for listing "h1" item. we use ternary operator .Bcz "if" statement apply on whole components.

  // let emptyMessage =
  //   foodItems.length === 0 ? <h3>I am still hungry .</h3> : null;

  return (
    <>
      <Container>
        <h1 className="food-heading">Healty Food</h1>
        {/* {emptyMessage}  Used for only print line "14*/}
        <ErrorMessage items={foodItems} />
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>
          Above is the list of healthy food which is good for health and well
          being.
        </p>
      </Container>
      {/* // </> */}
    </>
  );
}

export default App;

{
  /* <> =  we can use Blank instead of "<React.fragment>.....</"React.fragment>*/
}

{
  /* fragment = Allowing Groups of multiples element without extra Dom. But in this e.g extra "div" is added just for this two component.The "div" are empty and only work is to combine two components  */
}
{
  /* Note: for this problem to the div is not shown in console we use "React Fragment". */
  // MAP = Passes an value to one array method to another.Render list from array data.
  // KEY = Assign unique key for optimized re-render.An map or react we update the the component or values so we use the "KEY" so when we update or delete value.only specific component are updated nor the whole component.
  // We will use logical operator for listing  also
  // PROPS = Mechanism of pasiing data.Passing data from parent to child component.One way communication only and used for communication b/w components
  //PASSING CHILDREN = Children is specical props passing an element to components.Accessed weith "props.children"
  // STATE : State represent data that changes over time. State changes that cause the component to re-render . For funtional component use the "useState" hook.  hooks should only used inside component
}
