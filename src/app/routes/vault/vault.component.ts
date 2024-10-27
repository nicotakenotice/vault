import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular/standalone';
import { ListComponent } from '@lib/components';
import { VaultService } from '@lib/services';
import { IonCommonImports } from '@lib/utils';

@Component({
  selector: 'app-vault',
  standalone: true,
  imports: [CommonModule, IonCommonImports, IonSearchbar, ListComponent],
  templateUrl: './vault.component.html',
  styleUrl: './vault.component.scss'
})
export class VaultComponent {
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _vaultService = inject(VaultService);

  vault = computed(() => this._vaultService.vault());
  searchValue = signal<string>('');

  filteredItems = computed(() => {
    const items = structuredClone(this.vault().items).sort((a, b) => a.name.localeCompare(b.name));
    const searchValue = this.searchValue();
    return searchValue
      ? items.filter((item) => item.name.toUpperCase().includes(searchValue.toUpperCase()))
      : items;
  });

  /* ======================================================================= */

  search(e: any) {
    const value = e.detail.value;
    this.searchValue.set(value);
  }

  selectItem(itemId: number) {
    this._router.navigate([itemId], { relativeTo: this._activatedRoute });
  }
}
