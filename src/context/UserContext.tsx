// import axios from 'axios';
import React, { useState, createContext } from 'react';
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
