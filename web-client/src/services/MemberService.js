import axios from "axios";
import { getApiHost } from "../middleware/context/utils";

export class MemberService { 
    async createMember(memberRequest) {
        return axios.post(`${getApiHost()}/api/members`, memberRequest)
            .then(response => response.data.msg)
    }
}