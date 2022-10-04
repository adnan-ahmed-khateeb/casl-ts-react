import React, { useContext } from 'react';
import { createAbility } from '../config/Can';
import { UserContext } from '../context/UserContext';

const SelectUser = () => {
  const { setUserRole } = useContext(UserContext);

  const handleChange = (role: string) => {
    setUserRole(role);
  };
  return (
    <div className='flex flex-col w-fit m-auto my-6'>
      <button onClick={() => handleChange('admin')}>Switch to Admin</button>
      <button onClick={() => handleChange('user')}>Switch to User</button>
      <button onClick={() => handleChange('teamLead')}>
        Switch to Team Lead
      </button>
      <button onClick={() => handleChange('manager')}>Switch to Manager</button>
    </div>
  );
};

export default SelectUser;
