import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digital-Anna';

  constructor() { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  navbarContainer: boolean = false;
  ngOnInit(): void {
  }
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
    // this.navbarContainer =! this.navbarContainer;
  }

  closeMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
    // this.navbarContainer =! this.navbarContainer;
  }
}


