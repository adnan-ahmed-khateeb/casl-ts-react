import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { userRole } = useContext(UserContext);
  return (
    <div className='text-3xl flex justify-center items-center h-[70vh]'>
      Current user role: {userRole}
    </div>
  );
};

export default Home;
