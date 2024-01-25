import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
// import UserAccount from './components/UserAccount';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <Navbar />
      <SearchBar />
      {/* <BookList title="Featured Books" /> */}
      {/* <BookList title="Must-Read List" /> */}
      {/* <BookList title="Already-Read List" /> */}
      {/* <UserAccount /> */}
      <Footer />
    </div>
  );
}

export default App;