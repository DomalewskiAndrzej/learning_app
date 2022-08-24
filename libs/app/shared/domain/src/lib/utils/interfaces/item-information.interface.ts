import { ItemType } from '../enums/item-type.enum';

export interface ItemInformation {
  name: string;
  description: string;
  canOpen: boolean;
  itemType: typeof ItemType[keyof typeof ItemType];
}
