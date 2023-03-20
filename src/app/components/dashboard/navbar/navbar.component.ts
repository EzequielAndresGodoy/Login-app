import { Component, OnDestroy, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  menu: Menu[] = [];
  subscriptions: Subscription[] = [];

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => {
      subs.unsubscribe();
    })
    
  }
  cargarMenu() {
    let subsMenu: Subscription = this._menuService.getMenu().subscribe(data => {
        this.menu = data
    })
    this.subscriptions.push(subsMenu)
  }

}
