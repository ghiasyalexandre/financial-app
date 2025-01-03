import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  searchVisible: boolean = false;
  menuVisible: boolean = false;
  
  // Toggle visibility of the search bar and the search icon
  toggleSearch(): void {
    this.searchVisible = !this.searchVisible;
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}
