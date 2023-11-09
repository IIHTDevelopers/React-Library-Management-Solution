import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from '../components/BookForm';

const addBookMock = jest.fn();
const updateBookMock = jest.fn();

describe('boundary', () => {
    test('BookFormComponent boundary it is rendered', () => {
        render(<BookForm addBook={addBookMock} />);
        expect(screen.getByRole('heading')).toBeTruthy();
    });

    test('BookFormComponent boundary it has "Add a Book" h2', () => {
        render(<BookForm addBook={addBookMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Add a Book');
    });

    test('BookFormComponent boundary it has "Edit Book" h2 when in edit mode', () => {
        render(<BookForm editBook={{ title: 'Edit Book' }} updateBook={updateBookMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Edit Book');
    });

    test('BookFormComponent boundary it has title input field', () => {
        render(<BookForm addBook={addBookMock} />);
        const titleInput = screen.getByLabelText('Title:');
        expect(titleInput).toBeTruthy();
    });

    test('BookFormComponent boundary it has author input field', () => {
        render(<BookForm addBook={addBookMock} />);
        const authorInput = screen.getByLabelText('Author:');
        expect(authorInput).toBeTruthy();
    });

    test('BookFormComponent boundary it has genre input field', () => {
        render(<BookForm addBook={addBookMock} />);
        const genreInput = screen.getByLabelText('Genre:');
        expect(genreInput).toBeTruthy();
    });

    test('BookFormComponent boundary it has a "Add Book" button', () => {
        render(<BookForm addBook={addBookMock} />);
        const addButton = screen.getByRole('button', { name: 'Add Book' });
        expect(addButton).toBeTruthy();
    });

    test('BookFormComponent boundary it has an "Update Book" button when in edit mode', () => {
        render(<BookForm editBook={{ title: 'Edit Book' }} updateBook={updateBookMock} />);
        const updateButton = screen.getByRole('button', { name: 'Update Book' });
        expect(updateButton).toBeTruthy();
    });
});
