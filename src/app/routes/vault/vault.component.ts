import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  IonActionSheet,
  IonApp,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { ListComponent } from '@lib/components';
import { Vault, Workspace, WorkspaceItem } from '@lib/models';
import { VAULT } from '@lib/utils';

@Component({
  selector: 'app-vault',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    IonActionSheet,
    IonApp,
    IonAvatar,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonTextarea,
    IonTitle,
    IonToolbar,
    ListComponent
  ],
  templateUrl: './vault.component.html',
  styleUrl: './vault.component.scss'
})
export class VaultComponent implements OnInit {
  private readonly _router = inject(Router);

  vault = signal<Vault>(structuredClone(VAULT));
  selectedWorkspace = signal<Workspace>(this.vault().workspaces[0]);
  selectedItem = signal<WorkspaceItem | null>(null);

  workspaceModalOpen = signal<boolean>(false);
  itemModalOpen = signal<boolean>(false);

  actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete'
      }
    },
    {
      text: 'Share',
      data: {
        action: 'share'
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel'
      }
    }
  ];

  constructor() {
    this.canDismissWorkspaceModal = this.canDismissWorkspaceModal.bind(this);
    this.canDismissItemModal = this.canDismissItemModal.bind(this);
  }

  ngOnInit(): void {}

  selectWorkspace(workspace: Workspace): void {
    this.selectedWorkspace.set(workspace);
    this.closeWorkspaceModal();
  }

  async canDismissWorkspaceModal() {
    this.closeWorkspaceModal();
    return true;
  }

  openWorkspaceModal(): void {
    console.log(this.workspaceModalOpen() ? 'modal already open' : 'modal opening');
    this.workspaceModalOpen.set(true);
  }

  closeWorkspaceModal(): void {
    this.workspaceModalOpen.set(false);
  }

  selectItem(item: WorkspaceItem | null): void {
    // this._router.navigateByUrl(`/${item?.id}`);

    this.selectedItem.set(item);
    this.openItemModal();
  }

  newItem(): void {
    const workspace = structuredClone(this.selectedWorkspace());
    const newItem = new WorkspaceItem();
    workspace.items = [...workspace.items, newItem];
    this.updateWorkspace(workspace);
    this.selectItem(newItem);
  }

  deleteItem(item: WorkspaceItem): void {
    const workspace = structuredClone(this.selectedWorkspace());
    workspace.items = workspace.items.filter((o) => o.title !== item.title);
    this.updateWorkspace(workspace);
  }

  updateWorkspace(workspace: Workspace): void {
    this.vault.update((state) => ({
      ...state,
      workspaces: state.workspaces.map((o) => (o.title === workspace.title ? workspace : o))
    }));

    this.selectWorkspace(workspace);
  }

  async canDismissItemModal() {
    this.selectItem(null);
    this.closeItemModal();
    return true;
  }

  openItemModal(): void {
    this.itemModalOpen.set(true);
  }

  closeItemModal(): void {
    this.itemModalOpen.set(false);
  }

  exit(): void {
    this._router.navigateByUrl('/');
  }

  log(e: any): void {
    console.log(e);
  }
}
