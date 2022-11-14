import { createContext } from 'react';
import { createContextualCan } from '@casl/react';
import { AnyAbility, createMongoAbility } from '@casl/ability';
import { permissions } from './PermissionsMap';

const AbilityContext = createContext<AnyAbility>({} as AnyAbility);
const Can = createContextualCan(AbilityContext.Consumer);

const createAbility = (userRole: string) => {
  console.log('userRole:', userRole); // To help see the user in console!

  const ability = createMongoAbility(
    permissions[userRole as keyof typeof permissions]
  );

  return ability;
};

export { createAbility, AbilityContext, Can };
