import { createMongoAbility, AbilityBuilder } from '@casl/ability';

export default function defineRulesFor(role: string) {
  const {can, cannot, build} = new AbilityBuilder(createMongoAbility)
  
  switch (role) {
    case 'admin':
      can('manage', 'all');
      break;
    case 'user':
      can('read', ['Form']);
      cannot('create', 'User'); // see Table.tsx where the create user button is not shown for 'user' userRole.
      cannot('update', 'Table'); 
      break;
    case 'teamLead':
      can(['read'], ['Table']);
      cannot(['update', 'delete'], 'Table');
      break;
    case 'manager':
      can('read', 'all');
      can([ 'update'], 'Table');
      cannot('delete', 'Table');
      break;
    default:
      break;
  }
  return build()
}
