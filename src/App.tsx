import React from 'react';
import './styles/App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
