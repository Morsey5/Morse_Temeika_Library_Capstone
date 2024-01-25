import React from 'react';
import { getRandomBook, getBooksByGenre, getBooksByPageCount, getBooksByRating, getBookByTitle, getBooksByAuthor, getBookById, getBooksPerPage } from './apiFunctions';

const Home = () => {
    const handleSearchClick = () => {
      // Handle search logic here
      console.log('Search button clicked');
    };

  const handleRandomBookClick = async () => {
    try {
      const randomBook = await getRandomBook();
      console.log('Random Book:', randomBook);
    } catch (error) {
      console.error('Error fetching random book:', error);
    }
  };

  const handleGenreClick = async () => {
    try {
      const genres = ['fantasy', 'fiction', 'Classics'];
      const booksByGenre = await getBooksByGenre(genres);
      console.log('Books by Genre:', booksByGenre);
    } catch (error) {
      console.error('Error fetching books by genre:', error);
    }
  };

  const handlePageCountClick = async () => {
    try {
      const booksByPageCount = await getBooksByPageCount();
      console.log('Books by Page Count:', booksByPageCount);
    } catch (error) {
      console.error('Error fetching books by page count:', error);
    }
  };

  const handleRatingClick = async () => {
    try {
      const booksByRating = await getBooksByRating();
      console.log('Books by Rating:', booksByRating);
    } catch (error) {
      console.error('Error fetching books by rating:', error);
    }
  };

  const handleTitleClick = async () => {
    try {
      const bookByTitle = await getBookByTitle('Wuthering heights');
      console.log('Book by Title:', bookByTitle);
    } catch (error) {
      console.error('Error fetching book by title:', error);
    }
  };

  const handleAuthorClick = async () => {
    try {
      const booksByAuthor = await getBooksByAuthor({ lname: 'dickens', fname: 'Charles' });
      console.log('Books by Author:', booksByAuthor);
    } catch (error) {
      console.error('Error fetching books by author:', error);
    }
  };

  const handleBookIdClick = async () => {
    try {
      const bookById = await getBookById();
      console.log('Book by ID:', bookById);
    } catch (error) {
      console.error('Error fetching book by ID:', error);
    }
  };

  const handleBooksPerPageClick = async () => {
    try {
      const booksPerPage = await getBooksPerPage();
      console.log('Books per Page:', booksPerPage);
    } catch (error) {
      console.error('Error fetching books per page:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>Your Library</h1>
        <input type="text" id="searchInput" placeholder="Search for books..." />
        <button onClick={handleSearchClick}>Search</button>
      </header>

      <section id="mustReadList">
        <h2>Must-Read List</h2>
        {/* Books added to the Must-Read list will be displayed here */}
      </section>

      <section id="alreadyReadList">
        <h2>Already Read</h2>
        {/* Books marked as Already Read will be displayed here */}
      </section>

      <section id="bookRecommendations">
        <h2>Book Recommendations</h2>
        {/* Recommended books based on user history will be displayed here */}
      </section>

      <section id="userAccountInfo">
        <h2>User Account Information</h2>
        {/* Display user account information here (name, profile picture, etc.) */}
      </section>

      <section id="bookDetails">
        <h2>Book Details</h2>
        {/* Book info */}
      </section>

      <section id="apiButtons">
        <h2>API Buttons</h2>
        <button onClick={handleRandomBookClick}>Get Random Book</button>
        <button onClick={handleGenreClick}>Get Books By Genre</button>
        <button onClick={handlePageCountClick}>Get Books By Page Count</button>
        <button onClick={handleRatingClick}>Get Books By Rating</button>
        <button onClick={handleTitleClick}>Get Book By Title</button>
        <button onClick={handleAuthorClick}>Get Books By Author</button>
        <button onClick={handleBookIdClick}>Get Book By ID</button>
        <button onClick={handleBooksPerPageClick}>Get Books Per Page</button>
      </section>

      <footer>
        <nav>
          <a href="#">Home</a>
          <a href="#">Search</a>
          <a href="#">User Account</a>
          {/* May make adjustments to this */}
        </nav>
      </footer>
    </div>
  );
};

export default Home;