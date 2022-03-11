import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import PortfolioScreen from './components/PortfolioScreen';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Welcome/>
    <Skills/>
    <PortfolioScreen/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
