import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.anapioficeandfire.com/api/books"
      );
      console.log(response.data);
      setBooks(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="display-4 text-center">Game of Thrones Books</h2>
      <p>You have {books.length} to sell.</p>
    </div>
  );
}

export default App;
