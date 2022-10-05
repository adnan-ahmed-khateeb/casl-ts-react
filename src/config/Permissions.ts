import { createMongoAbility, AbilityBuilder } from '@casl/ability';

export default function defineRulesFor(role: string) {
  const {can, build} = new AbilityBuilder(createMongoAbility)
  
  switch (role) {
    case 'admin':
      can('manage', 'all');
      break;
    case 'user':
      can('read', ['Form']); // see Table.tsx where the create user button is not shown for 'user' userRole.
      break;
    case 'teamLead':
      can(['read'], ['Table']);
      break;
    case 'manager':
      can('read', 'all');
      can([ 'update'], 'Table');
      break;
    default:
      break;
  }
  return build()
}
