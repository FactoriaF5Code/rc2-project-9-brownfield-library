import axios from 'axios';
import { getApiHost } from '../middleware/context/utils';

export class BookService {

    async searchBooks(query, authenticationHeader) {
        const config = {
            headers: {
                "Authorization": authenticationHeader
            }
        }
        return axios.get(`${getApiHost()}/api/books?q=${query}`, config)
            .then(response => response.data.results);
    }

    async createBook(bookRequest) {
        return axios.post(`${getApiHost()}/api/books`, bookRequest)
            .then(response => response.data.msg)
    }

}