const axios = require('axios');

const apiKey = 'f5d9e4ce1emsh228679f1a71f764p153104jsna13130b51f6d';
const apiHost = 'books-api7.p.rapidapi.com';

const handleRequest = async (options) => {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(`Error making API request: ${error.message}`);
      throw error;
    }
  };

const getRandomBook = async () => {
  const options = {
    method: 'GET',
    url: 'https://books-api7.p.rapidapi.com/books/get/random/',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost
    }
  };

  return handleRequest(options);
};


const getBooksByGenre = async (genres) => {
  const options = {
    method: 'GET',
    url: 'https://books-api7.p.rapidapi.com/books/find/genres',
    params: {
      'genres[]': genres,
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost
    }
  };

  return handleRequest(options);
};


const getBooksByPageCount = async () => {
const options = {
    method: 'GET',
    url: 'https://books-api7.p.rapidapi.com/books/find/pages',
    params: {
      lte: '600',
      gte: '300',
      p: '1'
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost
    }
  };
  
  return handleRequest(options);
};


const getBooksByRating = async () => {
const options = {
    method: 'GET',
    url: 'https://books-api7.p.rapidapi.com/books/find/rating',
    params: {
      lte: '4',
      gte: '3.5',
      p: '1'
    },
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
    }
  };
  
  return handleRequest(options);
};

const getBookByTitle = async (title) => {
const options = {
    method: 'GET',
    url: 'https://books-api7.p.rapidapi.com/books/find/title',
    params: {
      title: 'Wuthering heights'
    },
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
    }
  };
  
  return handleRequest(options);
};

const getBooksByAuthor = async (author) => {
    const options = {
        method: 'GET',
        url: 'https://books-api7.p.rapidapi.com/books/find/author',
        params: {
          lname: 'dickens',
          fname: 'Charles'
        },
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
      };
      
      return handleRequest(options);
};


const getBookById = async () => {
    const options = {
        method: 'GET',
        url: 'https://books-api7.p.rapidapi.com/books/10',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
      };
      
      return handleRequest(options);
};


const getBooksPerPage = async () => {
    const options = {
        method: 'GET',
        url: 'https://books-api7.p.rapidapi.com/books',
        params: {p: '2'},
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }

        };
     return handleRequest(options);
}






module.exports = {
  getRandomBook,
  getBooksByGenre,
  getBooksByPageCount,
  getBooksByRating,
  getBookByTitle,
  getBooksByAuthor,
  getBookById,
  getBooksPerPage
};