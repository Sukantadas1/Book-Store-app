import React from "react";

const BookCard = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={onClick}>
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <p>{book.volumeInfo.title}</p>
    </div>
  );
};

export default BookCard;
