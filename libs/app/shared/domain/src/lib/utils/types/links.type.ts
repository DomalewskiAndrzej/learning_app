import { LinksNames } from '../enums/links-names.enum';
import { Link } from '../interfaces/link.interface';

export type LinksType = {
  [Property in keyof typeof LinksNames]: Link;
};
