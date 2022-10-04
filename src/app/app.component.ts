import { Component } from '@angular/core';
import { fader, slider } from './route-animations';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
    // slider
    // fader
    // InAndOut
  // ]
})

export class AppComponent {
  title = 'Digital-Anna';
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  navbarContainer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

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


