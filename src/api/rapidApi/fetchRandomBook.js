const axios = require('axios');

const fetchRandomBook = async () => {
  const options = {
    method: 'GET',
    url: 'https://books-api7.p.rapidapi.com/books/get/random/',
    headers: {
      'X-RapidAPI-Key': 'f5d9e4ce1emsh228679f1a71f764p153104jsna13130b51f6d',
      'X-RapidAPI-Host': 'books-api7.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching random book:', error);
    throw error; // Propagate the error to the caller
  }
};

module.exports = fetchRandomBook;