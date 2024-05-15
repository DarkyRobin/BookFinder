import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from './hooks/useDebounce';
import BookList from './components/BookList';
import { Book, GoogleBooksResponse } from './types';
import './App.css'

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const debounceQuery = useDebounce(query, 500);

  useEffect(() => {
    if(debounceQuery){
      axios.get<GoogleBooksResponse>(`https://www.googleapis.com/books/v1/volumes?q=${debounceQuery}`)
        .then(response => {
          const books = response.data.items.map(item => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail || 'some image',
            infoLink: item.volumeInfo.infoLink,
          }));
          setBooks(books);
        })
        .catch(() => {
          setError('Failed to fetch books');
        });
    } else {
      setBooks([]);
    }
  }, [debounceQuery]);

  return (
    <div className='main'>
      <h1>Book Finder</h1>
      <input
        type='text'
        placeholder='Search for books'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <div className='error'>{error}</div>}
      <BookList books={books}/>
    </div>
  )
}
//this is a comment
export default App
