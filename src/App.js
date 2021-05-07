import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './components/BookCard'
import './App.css';

const App = () => {

  const [books, setBooks] = useState([]);
  const [bookPosts, setBookPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books"
    );
    console.log(response.data);
    setBooks(response.data);
  };

  const getBooks = async () => {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books"
    );
    console.log(response.data);
    setBookPosts(response.data);
    fetchData();
  }

  useEffect(() => {

    const foundBook = bookPosts.filter(b => {
      return (
          b.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    searchTerm === '' ? setBookPosts(books) : setBookPosts(foundBook);
    
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

      <div className="row d-flex justify-content-center">
        <button
          className="col-6 justify-content-center btn btn-md btn-primary mb-3"
          onClick={() => getBooks()}
        >
          Click here for the list of books under this series!
        </button>
      </div>

      <BookCard bookPosts={bookPosts}/>

    </div>
  );
}

export default App;
