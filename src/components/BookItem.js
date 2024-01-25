import React from 'react';

function BookItem({ book }) {
  return (
    <div className="book-item">
      <img src={book.coverImageUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      
    </div>
  );
}

export default BookItem;