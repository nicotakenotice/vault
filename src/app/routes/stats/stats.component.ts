import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonCommonImports } from '@lib/utils';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, IonCommonImports],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {}
