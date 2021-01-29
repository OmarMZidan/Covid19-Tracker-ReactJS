import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [casesType, setCasesType] = useState("cases");

  return (
    <AuthContext.Provider value={[casesType, setCasesType]}>
      {props.children}
    </AuthContext.Provider>
  );
};
