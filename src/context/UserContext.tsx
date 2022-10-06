// import axios from 'axios';
import React, { useState, createContext } from 'react';
interface UserProps {
  children: React.ReactNode;
}

export const UserContext = createContext({
  username: 'Adn',
  userRole: 'manager',
  id: 0,
});

export const UserProvider = ({ children }: UserProps) => {
  const [user, setUser] = useState({
    username: 'Adnan',
    userRole: 'manager',
    id: 3,
  });

  return (
    <UserContext.Provider
      value={{ username: user.username, userRole: user.userRole, id: user.id }}
    >
      {children}
    </UserContext.Provider>
  );
};
