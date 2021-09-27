import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import { Dive } from "./components/Dive.js"

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Dive />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
