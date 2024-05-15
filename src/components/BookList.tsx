import React from "react";
import { Book } from "../types";
import BookItem from "./BookItem";

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({books}) => (
  <div className="book-list">
    {books.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
  </div>
);

export default BookList;