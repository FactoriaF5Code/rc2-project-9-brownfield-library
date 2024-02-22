import { createContext, useContext } from "react";
import { MemberService } from '../../services/MemberService';

const MemberDataContext = createContext();

export const MemberDataProvider = ({ children }) => {

    const createMember = async (memberRequest) => {
        const memberService = new MemberService();
        return memberService.createMember(memberRequest);
    }

    const value = {
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