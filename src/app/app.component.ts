import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import {
  IonApp,
  IonContent,
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IonApp, IonContent, IonFooter, IonHeader, IonTitle, IonToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.setStatusBarStyleLight();
  }

  setStatusBarStyleLight = async () => {
    await StatusBar.setStyle({ style: Style.Light });
  };
}
