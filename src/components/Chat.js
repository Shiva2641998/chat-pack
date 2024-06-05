import React from 'react'
import './Chat.css';
import { Counter } from '../features/counter/Counter';

function Chat({title = ""}) {


  return (
    <div className="App">
      <Counter />
      <h1>{title} Shivam Kumar 1.13 </h1>
    </div>
  );
}

export default Chat;
