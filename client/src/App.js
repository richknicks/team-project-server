import React, { useState } from 'react';
import BooksForm from './components/BooksForm';
import BooksDisplay from './components/BooksDisplay';
import axios from 'axios';
import './App.css';

const App=() => {
  const[books, setBooks]=useState([])
  const getBooks =()=>{
    console.log('its working');
    axios
    .get('http://localhost:5002/api/books')
    .then(response =>{
      console.log(response.data)
      setBooks(response.data)
    })
    .catch(error=> console.log("This is an error", error))
  }
  return (
    <div className="App">
      <p>Books API</p>
      <BooksForm name={"Rich"} getBooksBtn={getBooks} />
      <BooksDisplay booksDisplay={books} />
    </div>
  );
}

export default App;
