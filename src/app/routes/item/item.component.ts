import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [IonBackButton, IonContent, IonTitle, IonButton, IonButtons, IonHeader, IonToolbar, CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
