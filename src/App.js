import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from './store/cart';

function App() {

  const dispatch = useDispatch();

  const items = useSelector(state=> state.items);

  const addItemHandler = () => {
    const item = {id: 1, name: 'mani'}
    dispatch(cartActions.add(item));
  }
  const removeItemHandler = () => {
    dispatch(cartActions.delete())
  }
  return (
    <div className="App">
      {JSON.stringify(items)}
      <button onClick={addItemHandler}>Add IItem</button>
      <button onClick={removeItemHandler}>Remove Item</button>
    </div>
  );
}

export default App;
