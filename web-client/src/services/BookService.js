import axios from 'axios';
import { getApiHost } from '../middleware/context/utils';

export class BookService {

    async searchBooks(query) {
        return axios.get(`${getApiHost()}/api/books?q=${query}`)
            .then(response => response.data.results);
    }

    async availableBooks(query) {
        return axios.get(`${getApiHost()}/api/books/available?q=${query}&available=true`)
            .then(response => response.data.results);
    }

    async createBook(bookRequest) {
        return axios.post(`${getApiHost()}/api/books`, bookRequest)
            .then(response => response.data.msg)
    }


}