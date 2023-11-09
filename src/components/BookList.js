import React, { useState } from 'react';

const BookList = ({ books, deleteBook, setEditBook }) => {
    const [filters, setFilters] = useState({ genre: '' });

    const filteredBooks = books.filter((book) => {
        return book.genre.toLowerCase().includes(filters.genre.toLowerCase());
    });

    return (
        <div>
            <h2>Library Catalog</h2>
            <div>
                <label htmlFor="genre">
                    Filter by Genre:
                    <input
                        id="genre"
                        type="text"
                        value={filters.genre}
                        onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
                    />
                </label>
            </div>
            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.id}>
                        <strong>Title:</strong> {book.title}
                        <br />
                        <strong>Author:</strong> {book.author}
                        <br />
                        <strong>Genre:</strong> {book.genre}
                        <button onClick={() => setEditBook(book)}>Edit</button>
                        <button onClick={() => deleteBook(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
