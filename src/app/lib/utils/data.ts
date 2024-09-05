import { Vault } from '@lib/models';

export const VAULT: Vault = {
  owner: 'owner',
  workspaces: [
    {
      id: 'ws-1',
      title: 'Mails',
      items: [
        {
          id: 's-1',
          title: 'test1@mail.com',
          secrets: [
            { key: 'Key 1', value: 'Secret' },
            { key: 'Key 2', value: 'Another secret' }
          ],
          notes: 'password\nnote'
        },
        {
          id: 's-2',
          title: 'test2@mail.com',
          secrets: [],
          notes: 'password\nnote'
        }
      ]
    },
    {
      id: '2',
      title: 'Sites',
      items: [
        {
          id: 's-3',
          title: 'Site 1',
          secrets: [],
          notes: 'password\nnote'
        },
        {
          id: 's-4',
          title: 'Site 2',
          secrets: [],
          notes: 'password\nnote'
        }
      ]
    },
    {
      id: '3',
      title: 'Home',
      items: []
    },
    {
      id: '4',
      title: 'Work',
      items: []
    },
    {
      id: '5',
      title: 'Bank',
      items: []
    },
    {
      id: '6',
      title: 'Expire',
      items: []
    }
  ]
};
