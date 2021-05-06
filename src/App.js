import { useState, useEffect } from 'react';
import axios from 'axios';
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
      <p>You have {books.length} to sell.</p>
      <input
        type="text"
        className="form-control"
        id="pokemon-search"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={handleChange}
      />
      <div>
        {books.map( (book, index) => {
          return (
            <div key={index}>{book.name}</div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
