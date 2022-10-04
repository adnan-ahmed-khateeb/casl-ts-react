import { createContext } from 'react';
import { createContextualCan } from '@casl/react';
import { AnyAbility } from '@casl/ability';
import defineRulesFor from './Permissions';


const AbilityContext = createContext<AnyAbility>(null as unknown as AnyAbility);
const Can = createContextualCan(AbilityContext.Consumer);

const createAbility = (userRole: string) => {
    const ability = defineRulesFor(userRole);
    return ability;
}

export  {createAbility, AbilityContext, Can}