import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store/cart";
import { counterActions } from "./store/counter";

function App() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const counter = useSelector((state) => state.counter.counter);

  const addItemHandler = () => {
    const item = { id: 1, name: "mani" };
    dispatch(cartActions.add(item));
  };
  const removeItemHandler = () => {
    dispatch(cartActions.delete());
  };

  const increseHandler = () => {
    dispatch(counterActions.increse());
  };

  const decreseHandler = () => {
    dispatch(counterActions.decrese());
  };
  return (
    <div className="App">
      {JSON.stringify(items)}
      <br />
      <button onClick={addItemHandler}>Add IItem</button>
      <button onClick={removeItemHandler}>Remove Item</button>
      <br />
      <h1>{counter}</h1>
      <button onClick={increseHandler}>Increase</button>
      <button onClick={decreseHandler}>Decrese</button>
    </div>
  );
}

export default App;
