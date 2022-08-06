import { appConfig } from '@app/shared/resources';
import { ItemInformation } from '@app/shared/domain';

export interface Todo {
  id: number;
  uuid: string;
  priority: keyof typeof appConfig.priorities;
  timeToComplete:
    | `${'0' | '1'}${zero_nine}:${zero_fiftyNine}`
    | `${'2'}${zero_three}:${zero_fiftyNine}`;
  inProgress: boolean;
  information: ItemInformation;
}

type zero_three = '0' | '1' | '2' | '3';
type zero_nine = zero_three | '4' | '5' | '6' | '7' | '8' | '9';
type zero_fiftyNine = `${zero_three | '4' | '5'}${zero_nine}`;
