import axios from "axios";
import { getApiHost } from "../middleware/context/utils";

export class MemberService {
    async searchMembers(query) {
        return axios.get(`${getApiHost()}/api/members?q=${query}`)
            .then(response => {
                return response.data.results;
            });
    }
    async createMember(memberRequest) {
        return axios.post(`${getApiHost()}/api/members`, memberRequest)
            .then(response => response.data.msg);
    }
}