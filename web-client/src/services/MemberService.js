import axios from "axios";
import { getApiHost } from "../middleware/context/utils";

export class MemberService {
    async searchMembers(query, authenticationHeader) {
        const config = {
            headers: {
                "Authorization": authenticationHeader
            }
        }
        return axios.get(`${getApiHost()}/api/members?q=${query}`, config)
            .then(response => {
                return response.data.results;
            });
    }
    async createMember(memberRequest, authenticationHeader) {
        const config = {
            headers: {
                "Authorization": authenticationHeader
            }
        }
        return axios.post(`${getApiHost()}/api/members`, memberRequest, config)
            .then(response => response.data.msg);
    }
}