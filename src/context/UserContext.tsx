// import axios from 'axios';
import React, { useState, createContext } from 'react';
interface UserProps {
  children: React.ReactNode;
}

export const UserContext = createContext({
  username: 'Adn',
  userRole: 'user',
  id: 0,
});

export const UserProvider = ({ children }: UserProps) => {
  const [user, setUser] = useState({
    username: 'Adnan',
    userRole: 'user',
    id: 3,
  });

  //   useEffect(() => {
  //     axios.get('http://localhost:8080/users/1').then((response) => {
  //       // console.log(response);
  //       console.log('response:', response.data);
  //       setUser({
  //         username: response.data.name,
  //         role: response.data.role,
  //         id: response.data.id,
  //       });
  //       console.log('user', user);
  //     });
  //   }, []);

  return (
    <UserContext.Provider
      value={{ username: user.username, userRole: user.userRole, id: user.id }}
    >
      {children}
    </UserContext.Provider>
  );
};