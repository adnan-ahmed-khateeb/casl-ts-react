import { createMongoAbility, AbilityBuilder } from '@casl/ability';

export default function defineRulesFor(role: string) {
  const {can, cannot, build} = new AbilityBuilder(createMongoAbility)
  console.log('role:', role)
  
  switch (role) {
    case 'admin':
      can('manage', 'all');
      break;
    case 'user':
      can('read', ['Form']);
      cannot('create', 'User'); // see Table.tsx where the create user button is not shown for 'user' userRole.
      break;
    
    default:
      break;
  }
  return build()
}
