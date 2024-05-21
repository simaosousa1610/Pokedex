import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders search box', () => {
  render(<App />);
  const searchBox = screen.getByRole('textbox');
  expect(searchBox).toBeInTheDocument();
});

test('renders search button', () => {
  render(<App />);
  const searchButton = screen.getByRole('button', { name: /search/i });
  expect(searchButton).toBeInTheDocument();
});

test('renders next and previous buttons', () => {
  render(<App />);
  const previousButton = screen.getByRole('button', { name: /previous/i });
  const nextButton = screen.getByRole('button', { name: /next/i });
  expect(previousButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});

test('searching for a pokemon displays the pokemon', async () => {
  render(<App />);
  const searchBox = screen.getByRole('textbox');
  const searchButton = screen.getByRole('button', { name: /search/i });

  fireEvent.change(searchBox, { target: { value: 'bulbasaur' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });
}); 

test('clicking next displays the next pokemon', async () => {
  render(<App />);
  // check if "ID" is ++ by 1
  const searchBox = screen.getByRole('textbox');
  const searchButton = screen.getByRole('button', { name: /search/i });
  const nextButton = screen.getByRole('button', { name: /next/i });
  
  fireEvent.change(searchBox, { target: { value: '1' } });
  fireEvent.click(searchButton);

  // wait for the first pokemon to load
  await waitFor(() => {
    expect(screen.getByText(/ID: 1/i)).toBeInTheDocument();
  });

  fireEvent.click(nextButton);

  await waitFor(() => {
    expect(screen.getByText(/ID: 2/i)).toBeInTheDocument();
  });

}); 

test('clicking previous displays the previous pokemon', async () => {
  render(<App />);
  // check if "ID" is -- by 1
  const searchBox = screen.getByRole('textbox');
  const searchButton = screen.getByRole('button', { name: /search/i });
  const previousButton = screen.getByRole('button', { name: /previous/i });
  
  fireEvent.change(searchBox, { target: { value: '2' } });
  fireEvent.click(searchButton);

  // wait for the second pokemon to load
  await waitFor(() => {
    expect(screen.getByText(/ID: 2/i)).toBeInTheDocument();
  });

  fireEvent.click(previousButton);

  await waitFor(() => {
    expect(screen.getByText(/ID: 1/i)).toBeInTheDocument();
  });

});


test('searching for a non-existent pokemon displays an error message', async () => {
  render(<App />);
  const searchBox = screen.getByRole('textbox');
  const searchButton = screen.getByRole('button', { name: /search/i });

  fireEvent.change(searchBox, { target: { value: 'nonexistent' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});

// test for partial search term should find a pokemon close to the search term
test('searching for a partial search term displays a pokemon', async () => {
  render(<App />);
  const searchBox = screen.getByRole('textbox');
  const searchButton = screen.getByRole('button', { name: /search/i });

  fireEvent.change(searchBox, { target: { value: 'bulbass' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });
});
