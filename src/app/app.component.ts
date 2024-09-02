import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IonApp, IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.setStatusBarStyleLight();
  }

  setStatusBarStyleLight = async () => {
    await StatusBar.setStyle({ style: Style.Light });

    // const metaTag = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    // metaTag.content = themeName === 'light' ? '#ffffff' : '#1d232a';
  };
}
