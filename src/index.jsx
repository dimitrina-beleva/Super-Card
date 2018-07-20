import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
import App from './App';
=======
import { observable, action } from 'mobx';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import App from './components/App';
>>>>>>> Stashed changes

ReactDOM.render(<App />, document.querySelector('.container'));
