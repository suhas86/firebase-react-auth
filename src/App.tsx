import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Signin from './sign-in/Signin';
import Signup from './sign-up/Signup';
import  Userinfo  from './user-info/Userinfo';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Signin />
      <Signup />
      </div>
      <hr></hr>
      <Userinfo />
    </div>
  );
}

export default App;
