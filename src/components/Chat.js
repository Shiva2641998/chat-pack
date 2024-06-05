import React from 'react'
import './Chat.css';
import packageJson from '../../package.json'; 
import { Counter } from '../features/counter/Counter';

function Chat({title = ""}) {

const version = packageJson.version;

  return (
    <div className="App">
      <Counter />
      <h1>{title} Shivam Kumar {version}</h1>
    </div>
  );
}

export default Chat;
