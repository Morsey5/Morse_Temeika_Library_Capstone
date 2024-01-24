const axios = require('axios');

const fetchBooksByPage = async (page) => {
  const options = {
    method: 'GET',
    url: 'https://books-api7.p.rapidapi.com/books',
    params: { p: page },
    headers: {
      'X-RapidAPI-Key': 'f5d9e4ce1emsh228679f1a71f764p153104jsna13130b51f6d',
      'X-RapidAPI-Host': 'books-api7.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books by page:', error);
  }
};

module.exports = fetchBooksByPage;