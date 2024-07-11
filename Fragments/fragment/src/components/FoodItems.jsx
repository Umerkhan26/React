import { useState } from "react";
import Item from "./Item";
import PropTypes from "prop-types";

const FoodItems = ({ items }) => {
  // let foodItems = ["Salad", "Roti", "Rice", "Milk", "Honey", "Ghee"];

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item
          key={index}
          foodItem={item}
          bought={activeItems.includes(item)}
          // handleBuyButton={() => console.log(`${item} being bought`)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
      {/* <li className="list-group-item">Roti</li>
    <li className="list-group-item">Rice</li>
    <li className="list-group-item">Milk</li>
    <li className="list-group-item">Honey</li> */}
    </ul>
  );
};

FoodItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// we use "propTypes for ensuring that we pass coreect type

export default FoodItems;
