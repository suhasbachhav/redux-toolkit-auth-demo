import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounterData = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounterHandler());
  };

  const counterHandler = (amount) => {
    dispatch(counterActions.counterHandler(amount));
  };

  const resetHandler = () => {
    dispatch(counterActions.resetHandler());
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterData && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={()=>counterHandler(1)}>Increment</button>
        <button onClick={()=>counterHandler(-1)}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>

        <button onClick={()=>counterHandler(10)}>Increment by 10</button>
        <button onClick={()=>counterHandler(-10)}>Decrement by 10 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
