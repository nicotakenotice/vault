import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonInput,
  IonItem,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonTextarea
} from '@ionic/angular/standalone';
import { VaultItem } from '@lib/models';
import { VaultService } from '@lib/services';
import { IonCommonImports } from '@lib/utils';

@Component({
  selector: 'app-vault-item',
  standalone: true,
  imports: [
    CommonModule,
    IonCommonImports,
    IonInput,
    IonItem,
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption,
    IonTextarea
  ],
  templateUrl: './vault-item.component.html',
  styleUrls: ['./vault-item.component.scss']
})
export class VaultItemComponent {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _vaultService = inject(VaultService);

  item = signal<VaultItem | null>(null);
  isReadonly = signal<boolean>(true);

  constructor() {
    const itemId = this._activatedRoute.snapshot.paramMap.get('itemId');
    itemId && this.item.set(structuredClone(this._vaultService.getItem(Number(itemId))));
    Number(itemId) === 0 && this.setReadonly(false);
  }

  setReadonly(value: boolean) {
    this.isReadonly.set(value);
  }

  saveItem(item: VaultItem): void {
    this._vaultService.saveItem(item);
    this.setReadonly(true);
  }

  updateItem(e: any, key: keyof VaultItem) {
    const value = e.detail.value;
    this.item.update((state) => ({ ...state!, [key]: value }));
  }

  log(e: any) {
    console.log(e);
  }
}
