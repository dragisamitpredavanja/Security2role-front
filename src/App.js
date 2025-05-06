import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppRoutes from './Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;