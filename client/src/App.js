import React from 'react';
import './App.css';
import { Content } from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import IsAuth from './HOC/IsAuth';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="container">
          <IsAuth>
            <Content />
          </IsAuth>
      </div>
    </div>
  );
}

export default App;
