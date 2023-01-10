import React from 'react';
import NavBar from './components/NavBar';
import Pages from './pages/Pages'
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
