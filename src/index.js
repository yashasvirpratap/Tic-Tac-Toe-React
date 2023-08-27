import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import { BoardComponent } from './component/board';
import { Scoreboard } from './component/scoreboard';
import './css/index.css';
import reportWebVitals from './reportWebVitals';

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/board" component={BoardComponent} />
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
