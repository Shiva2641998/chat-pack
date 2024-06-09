import './Chat.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { increment, selectCount } from '../features/counter/counterSlice';
import { Counter } from '../features/counter/Counter';

function Chat({title = ""}) {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Counter />
      {/* {count} */}
      <h1
      // onClick={() => dispatch(increment())}
      >{title} Shivam Kumar 1.13 </h1>
    </div>
  );
}

export default Chat;
