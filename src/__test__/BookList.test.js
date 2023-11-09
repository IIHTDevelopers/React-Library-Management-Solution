import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from '../components/BookList';

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2' },
];

const deleteBookMock = jest.fn();
const setEditBookMock = jest.fn();

describe('boundary', () => {
    beforeEach(() => {
        render(
            <BookList books={books} deleteBook={deleteBookMock} setEditBook={setEditBookMock} />
        );
    });

    test('BookListComponent boundary it is rendered', () => {
        expect(screen.getByRole('heading', { name: 'Library Catalog' })).toBeTruthy();
    });

    test('BookListComponent boundary it has "Library Catalog" in h2', () => {
        const h2Element = screen.getByRole('heading', { name: 'Library Catalog' });
        expect(h2Element).toBeTruthy();
    });

    test('BookListComponent boundary it has a "Filter by Genre" text field', () => {
        const genreInput = screen.getByLabelText('Filter by Genre:');
        expect(genreInput).toBeTruthy();
    });

    test('BookListComponent boundary it displays the Title of a book after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Genre:');
        fireEvent.change(filterInput, { target: { value: 'Genre 1' } });
        const strongElement = await screen.findByText('Title:');
        expect(strongElement).toBeTruthy();
    });
    
    test('BookListComponent boundary it displays the Author of a book after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Genre:');
        fireEvent.change(filterInput, { target: { value: 'Genre 1' } });
        const strongElement = await screen.findByText('Author:');
        expect(strongElement).toBeTruthy();
    });

    test('BookListComponent boundary it displays the Genre of a book after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Genre:');
        fireEvent.change(filterInput, { target: { value: 'Genre 1' } });
        const strongElement = await screen.findByText('Genre:');
        expect(strongElement).toBeTruthy();
    });

    test('BookListComponent boundary it displays the Edit button to edit the book', async () => {
        const filterInput = screen.getAllByText('Edit');
        expect(filterInput).toBeTruthy();
    });

    test('BookListComponent boundary it displays the Delete button to delete the book', async () => {
        const filterInput = screen.getAllByText('Delete');
        expect(filterInput).toBeTruthy();
    });
});
