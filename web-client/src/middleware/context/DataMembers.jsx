
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataMembersContext = createContext();

export const DataMembersProvider = ({ children }) => {

  const searchMember = (query) => { }

  const value = {
    searchMember
  };

  return <DataMembersContext.Provider value={value}>{children}</DataMembersContext.Provider>;
};

export const useDataMembers = () => {
  return useContext(DataMembersContext);
};
