import { createContext, useContext } from "react";
import { MemberService } from '../../services/MemberService';
import { useAuthenticationContext } from "./AuthenticationContext";

const MemberDataContext = createContext();


export const MemberDataProvider = ({ children }) => {
    const { getAuthenticationHeader } = useAuthenticationContext();
    const memberService = new MemberService();

    const searchMembers = async (query) => {
        return memberService.searchMembers(query, getAuthenticationHeader());
    }

    const createMember = async (memberRequest) => {
        return memberService.createMember(memberRequest, getAuthenticationHeader());
    }

    const value = {
        searchMembers,
        createMember,
    };
    return <MemberDataContext.Provider value={value}>{children}</MemberDataContext.Provider>
}

export const useMemberDataContext = () => {
    const context = useContext(MemberDataContext);
    if (context === undefined) {
        console.error('Member Context must be used within a Member provider');
    }
    return context;
}