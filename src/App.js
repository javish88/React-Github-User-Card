import React from 'react';
import './App.css';
import FollowersCard from "./components/FollowersCard"
import UserCard from "./components/Data"

function App() {
  return (
    <div className="App">
      <h1>Javis User-Cards</h1>
      <div>
        <UserCard/>
      </div>
      <FollowersCard/>
    </div>
  )
}

export default App;
