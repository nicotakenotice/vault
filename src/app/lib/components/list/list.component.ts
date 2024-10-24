import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import {
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList
} from '@ionic/angular/standalone';
import { VaultItem } from '@lib/models';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  items = input<VaultItem[]>([]);
  onItemClick = output<VaultItem>();
  onItemDelete = output<VaultItem>();
}
