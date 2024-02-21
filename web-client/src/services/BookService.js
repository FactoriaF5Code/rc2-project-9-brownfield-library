import axios from 'axios';
import { getApiHost } from '../middleware/context/utils';

export class BookService {

    async searchBooks(query) {
        return axios.get(`${getApiHost()}/api/books?q=${query}`)
            .then(response => response.data.results);
    }

}