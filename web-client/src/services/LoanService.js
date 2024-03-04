import axios from 'axios';
import { getApiHost } from '../middleware/context/utils';

export class LoanService {
    async createLoan(loanRequest) {
        console.log("Gonna do: ")
        console.log(`${getApiHost()}/api/loans`)
        console.log(loanRequest)
        return axios.post(`${getApiHost()}/api/loans`, loanRequest)
            .then(response => response.data.msg);
    }

    async searchLoan(loanResponse) {
        console.log(`${getApiHost()}/loans`)
        console.log(loanResponse)
        return axios.get(`${getApiHost()}/loans`)
            .then(response => response.data.results);
    }
}