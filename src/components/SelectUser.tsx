import { AnyAbility } from '@casl/ability';
import { useAbility } from '@casl/react';
import React, { useContext } from 'react';
import { AbilityContext } from '../config/Can';
import updateAbility from '../config/UpdateAbility';
import { ADMIN, MANAGER, TEAM_LEAD, USER } from '../constants/permissions_constants';
import { UserContext } from '../context/UserContext';

const SelectUser = () => {
  const { setUserRole, userRole } = useContext(UserContext);
  console.log('userRole:', userRole);

  const ability = useAbility(AbilityContext);

  const handleChange = (role: string, ability: AnyAbility) => {
    setUserRole(role);
    updateAbility(ability, role);
  };
  return (
    <div className='flex flex-col w-fit m-auto my-6'>
      <button onClick={() => handleChange(ADMIN, ability)}>
        Switch to Admin
      </button>
      <button onClick={() => handleChange(USER, ability)}>
        Switch to User
      </button>
      <button onClick={() => handleChange(TEAM_LEAD, ability)}>
        Switch to Team Lead
      </button>
      <button onClick={() => handleChange(MANAGER, ability)}>
        Switch to Manager
      </button>
    </div>
  );
};

export default SelectUser;
