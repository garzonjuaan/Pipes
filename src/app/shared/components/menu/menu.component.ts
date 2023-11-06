import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: './'
              },
              {
                label: 'Números', routerLink: 'numbers',
                icon: 'pi pi-dollar'
              },
              {
                label: 'No comunes', routerLink: 'uncommon',
                icon: 'pi pi-globe'
              }
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Custom Pipes',
                icon: 'pi pi-cog',
                routerLink: 'custom'

              }
            ]
          }
        ];
    }
}
