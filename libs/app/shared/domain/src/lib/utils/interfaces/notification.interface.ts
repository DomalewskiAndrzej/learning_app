import { ItemInformation } from './item-information.interface';

export interface Notification {
  uuid: string;
  itemInformation: ItemInformation;
}
