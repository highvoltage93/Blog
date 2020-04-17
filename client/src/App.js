import React from 'react';
import './App.css';
import { Content } from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="container">
          <Content />
      </div>
    </div>
  );
}

export default App;
