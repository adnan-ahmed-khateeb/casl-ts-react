// import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';
import { createAbility } from '../config/Can';
interface UserProps {
  children: React.ReactNode;
}

interface UserCont {
  userRole: string;
  setUserRole: React.Dispatch<React.SetStateAction<string>>;
}
export const UserContext = createContext<UserCont>({
  userRole: 'user',
  setUserRole: () => {},
});

export const UserProvider = ({ children }: UserProps) => {
  const [userRole, setUserRole] = useState<string>('user');
  
  return (
    <UserContext.Provider
      value={{
        userRole: userRole,
        setUserRole: setUserRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
