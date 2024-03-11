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

    async availableBooks(query) {
        return axios.get(`${getApiHost()}/api/books/available?q=${query}&available=true`)
            .then(response => response.data.results);
    }


    async createBook(bookRequest, authenticationHeader) {
        const config = {
            headers: {
                "Authorization": authenticationHeader
            }
        }
        return axios.post(`${getApiHost()}/api/books`, bookRequest, config)
            .then(response => response.data.msg)
    }

    async searchLoanInfo(id) {
        return axios.get(`${getApiHost()}/api/loans?bookId=${id}`)
        .then(response => response.data)
    }


}