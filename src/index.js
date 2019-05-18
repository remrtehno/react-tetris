import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import RenderCells from './components/renderCells/renderCells';





ReactDOM.render(<App />, document.getElementById('root'))



ReactDOM.render(<RenderCells limit="200"/>, document.getElementById("grid"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
