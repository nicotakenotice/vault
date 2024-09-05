import { Injectable, signal } from '@angular/core';
import { Vault, Workspace, WorkspaceItem } from '@lib/models';
import { VAULT } from '@lib/utils';

@Injectable({ providedIn: 'root' })
export class VaultService {
  vault = signal<Vault>(structuredClone(VAULT));
  selectedWorkspace = signal<Workspace>(this.vault().workspaces[0]);
  selectedItem = signal<WorkspaceItem | null>(null);

  constructor() {}
}
