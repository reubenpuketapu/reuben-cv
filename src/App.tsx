import React from 'react';
import './App.css';
import Introduction from './Components/Introduction';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className="App Card">
      <div>
        <Header />
        <Introduction />
        <Main />
      </div>
    </div>
  );
}

export default App;
