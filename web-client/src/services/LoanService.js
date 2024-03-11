import axios from 'axios';
import { getApiHost } from '../middleware/context/utils';

export class LoanService {
    async createLoan(loanRequest, authenticationHeader) {
        const config = {
            headers: {
                "Authorization": authenticationHeader
            }
        }
        return axios.post(`${getApiHost()}/api/loans`, loanRequest, config)
            .then(response => response.data.msg);
    }

    async searchLoan(loanResponse, authenticationHeader) {
        const config = {
            headers: {
                "Authorization": authenticationHeader
            }
        }
        console.log(`${getApiHost()}/loans`)
        console.log(loanResponse)
        return axios.get(`${getApiHost()}/loans`, loanResponse, config)
            .then(response => response.data.results);
    }
}