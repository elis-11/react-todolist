import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const DATA = [
  { id: "todo-0", name: "Task-1", completed: true },
  { id: "todo-1", name: "Task-2", completed: false },
  { id: "todo-2", name: "Task-3", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

