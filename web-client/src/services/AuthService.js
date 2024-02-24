import axios from "axios";
import { getApiHost } from "../middleware/context/utils";

export class AuthService {
    async login(user, password) {
        const response = await axios.post(`${getApiHost()}/auth/login`, { user, password });
        return response.data;
    }
}