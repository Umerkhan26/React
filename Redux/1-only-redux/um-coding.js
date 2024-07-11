const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
store.dispatch({ type: "DECREMENT" });

// REDUX: Single Source :Uses a single central store to maintain the entire application state.
// Action:Component never changes the store. We can update the component through dispatched "Action" which described event.
// Reducer: Actions are processed through reducer . it is pure funtion that return new state .
// Redux is different from useReducer hook or context Api
