import { AnyAbility } from '@casl/ability';
import { createAbility } from './Can';

export default function updateAbility(ability: AnyAbility, role: string) {
  const { rules } = createAbility(role);

  ability.update(rules);
}
