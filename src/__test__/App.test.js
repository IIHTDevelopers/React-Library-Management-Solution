import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe("boundary", () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Add book form" h2', () => {
        render(<App />);
        expect(screen.queryByText('Add book form')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Books list" h2', () => {
        render(<App />);
        expect(screen.queryByText('Books list')).toBeInTheDocument();
    });
});
