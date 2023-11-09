import React, { useState, useEffect } from 'react';

const BookForm = ({ addBook, editBook, updateBook }) => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
    });

    useEffect(() => {
        if (editBook) {
            setBook({ ...editBook });
        } else {
            setBook({
                title: '',
                author: '',
                genre: '',
            });
        }
    }, [editBook]);

    const isEditForm = !!editBook;

    const isFormIncomplete = !book.title || !book.author || !book.genre;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditForm) {
            updateBook(book);
        } else {
            addBook(book);
        }
        setBook({ title: '', author: '', genre: '' });
    };

    return (
        <div>
            <h2>{isEditForm ? 'Edit Book' : 'Add a Book'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Title:
                    <input
                        id="title"
                        type="text"
                        value={book.title}
                        onChange={(e) => setBook({ ...book, title: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="author">
                    Author:
                    <input
                        id="author"
                        type="text"
                        value={book.author}
                        onChange={(e) => setBook({ ...book, author: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="genre">
                    Genre:
                    <input
                        id="genre"
                        type="text"
                        value={book.genre}
                        onChange={(e) => setBook({ ...book, genre: e.target.value })}
                        required
                    />
                </label>
                <button type="submit" disabled={isFormIncomplete}>
                    {isEditForm ? 'Update Book' : 'Add Book'}
                </button>
            </form>
        </div>
    );
};

export default BookForm;
