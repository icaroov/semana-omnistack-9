import React from 'react';
import './App.css';

//Logo
import logo from './assets/logo.svg';

//Rotas
import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
