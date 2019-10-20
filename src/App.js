import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import Bookcard from './components/BookCard/bookcard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <Bookcard />
        </div>
      </div>
    </div>
  );
}

export default App;
