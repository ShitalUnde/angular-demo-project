import { Component } from '@angular/core';
import { MenuItems, NavBarMenu, User } from '../model/entity';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  userObj: User = new User()
  menuItems: MenuItems[]  = NavBarMenu


}
