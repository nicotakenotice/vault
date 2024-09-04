import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import {
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList
} from '@ionic/angular/standalone';
import { WorkspaceItem } from '@lib/models';

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
export class ListComponent implements OnInit {
  items = input<WorkspaceItem[]>([]);
  onItemClick = output<WorkspaceItem>();
  onItemDelete = output<WorkspaceItem>();

  constructor() {}

  ngOnInit() {}

  viewItem(item: WorkspaceItem): void {
    this.onItemClick.emit(item);
  }

  deleteItem(item: WorkspaceItem): void {
    this.onItemDelete.emit(item);
  }
}
