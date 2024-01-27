import React, { useState, useEffect } from "react";
import "./components/App.css";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import SearchBar from "./components/SearchBar";
import { fetchBooks } from "./service";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // Fetch initial book data
    fetchBooks("harry potter").then((harryPotterBooks) => {
      fetchBooks("Sherlock Holmes").then((sherlockHolmesBooks) => {
        setBooks([...harryPotterBooks, ...sherlockHolmesBooks]);
      });
    });
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleSearch = async (query) => {
    const searchedBooks = await fetchBooks(query);
    setBooks(searchedBooks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <BookList books={books} onBookClick={handleBookClick} />
        {selectedBook && <BookDetail book={selectedBook} />}
      </main>
    </div>
  );
}

export default App;
