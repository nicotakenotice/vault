import { Secret } from './Secret';

export class VaultItem {
  id: number = 0;
  name: string = 'New item';
  notes: string = '';
  secrets: Secret[] = [];
  labelIds: string[] = [];
}
