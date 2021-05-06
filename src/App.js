import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './components/BookCard'
import './App.css';

const App = () => {

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get(
        "https://www.anapioficeandfire.com/api/books"
      );
      console.log(response.data);
      setBooks(response.data);
      searchTerm === '' ? setBooks(response.data) : setBooks(foundBook);
    };

    fetchData();

    const foundBook = books.filter(b => {
      return (
          b.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    
  }, [searchTerm]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  return (
    <div className="container my-5">

      <h2 className="display-4 text-center">Game of Thrones Books</h2>
      
      <input
        type="text"
        className="form-control my-3 "
        id="book-search"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={handleChange}
      />

      <BookCard books={books}/>

    </div>
  );
}

export default App;
