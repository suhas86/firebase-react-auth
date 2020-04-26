import React,{useState, useEffect} from 'react';
import './App.scss';
import Signin from './sign-in/Signin';
import Signup from './sign-up/Signup';
import  Userinfo  from './user-info/Userinfo';

import {auth, createUserProfileDocument} from "./firebase"

function App() {
  const [currentUser,setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const user = await createUserProfileDocument(userAuth);
        user?.onSnapshot((snapshot) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    })
  },[])
  return (
    <div className="App">
      <div className="container">
      <Signin />
      <Signup />
      </div>
      <hr></hr>
      <Userinfo currentUser={currentUser} />
    </div>
  );
}

export default App;
