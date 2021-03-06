import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.baseURL = 'https://azsoft-code-server.herokuapp.com';

async function fetchBooks() {
  try {
    const response = await axios.get(
      'https://azsoft-code-server.herokuapp.com/books'
    );

    return response.data.books;
  } catch (e) {
    throw e;
  }
}
export default fetchBooks;
