import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonCommonImports } from '@lib/utils';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, IonCommonImports],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {}
