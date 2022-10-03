import { createMongoAbility, AbilityBuilder } from '@casl/ability';

export default function defineRulesFor(role: string) {
  const {can, cannot, build} = new AbilityBuilder(createMongoAbility)
  console.log('role:', role)
  
  switch (role) {
    case 'admin':
      can('manage', 'all');
      break;
    case 'user':
      can('read', ['Table', 'Form']);
      cannot('create', 'User');
      break;
    
    default:
      break;
  }
  return build()
}
