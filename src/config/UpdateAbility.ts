import { AbilityBuilder, AnyAbility, createMongoAbility } from '@casl/ability';
import {
  ADMIN,
  MANAGE,
  MANAGER,
  READ,
  TEAM_LEAD,
  UPDATE,
  USER,
} from '../constants/permissions_constants';

export default function updateAbility(ability: AnyAbility, role: string) {
  const { can, rules } = new AbilityBuilder(createMongoAbility);

  switch (role) {
    case ADMIN:
      can([MANAGE], ['all']);
      break;
    case USER:
      can([READ], ['Form']);
      break;
    case TEAM_LEAD:
      can([READ], ['Table']);
      break;
    case MANAGER:
      can([READ], ['all']);
      can([UPDATE], ['Table']);
      break;
    default:
      break;
  }
  ability.update(rules);
}
