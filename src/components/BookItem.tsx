import React from 'react';
import { Book } from '../types';

interface BookItemProps {
  book: Book | null;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  if (!book) {
    return <div className="book-item">Book not found</div>;
  }

  const { title, authors, thumbnail } = book;

  return (
    <div className="book-item">
      <img
        src={thumbnail || 'https://via.placeholder.com/128x193?text=No+Image'}
        alt={title ? `${title} thumbnail` : 'No title available'}
      />
      <div>
        <h3>{title || 'No title available'}</h3>
        <p>{authors?.join(', ') || 'No authors available'}</p>
      </div>
    </div>
  );
};

export default BookItem;
