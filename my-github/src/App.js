import React from 'react';
import './App.css';
import UserProfile from "./components/UserProfile";
import FollowersList from "./components/FollowersList"

function App() {

  return (


    <div className="App">

     <h1>GitHub User Card</h1>
          <UserProfile  />
          <FollowersList />


    </div>
  );
}

export default App; 
