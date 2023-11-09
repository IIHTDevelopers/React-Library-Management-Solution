import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:4000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    try {
      const addedBook = await axios.post('http://localhost:4000/books', book);
      setBooks([...books, addedBook.data]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:4000/books/${bookId}`);
      setBooks(books.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const updateBook = async (book) => {
    try {
      await axios.put(`http://localhost:4000/books/${book.id}`, book);
      setBooks(
        books.map((b) => (b.id === book.id ? { ...b, ...book } : b))
      );
      setEditBook(null);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to your library</h2>
      <h2>Add book form</h2>
      <BookForm addBook={addBook} editBook={editBook} updateBook={updateBook} />
      <h2>Books list</h2>
      <BookList
        books={books}
        deleteBook={deleteBook}
        setEditBook={setEditBook}
      />
    </div>
  );
}

export default App;
