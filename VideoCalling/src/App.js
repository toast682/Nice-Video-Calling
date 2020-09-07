import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { NavLink, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import VideoCall from './components/VideoCall';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <div className="App">
    //   <h1>Dope Ass Video Calling</h1>
    //   <Navigation />
    //   <Main />
    // </div>

    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/videocall" component={VideoCall}></Route>
    </Router>

  );
}

// const Navigation = () => (
//   <nav>
//     <ul>
//       <li><NavLink to='/'>Home</NavLink></li>
//       <li><NavLink to='/videocall'>Video Call</NavLink></li>
//     </ul>
//   </nav>
// );

// const Main = () => (
//   <Switch>
//     <Route exact={true} path='/' component={Home}></Route>
//     <Route path='/videocall' component={VideoCall}></Route>
//   </Switch>
// );

// const Home = () => (
//   <div className='home'>
//     <h1>Welcome!</h1>
//     <p>Made by Amogh Joshi & Andrew Han</p>
//     <p>gang gang</p>
//   </div>
// );

// const VideoCall = () => (
//   <div>
//     <h1>Video Call starting...</h1>
//     <p>beep boop beep booop (coding stuff)</p>
//   </div>
// );

export default App;
