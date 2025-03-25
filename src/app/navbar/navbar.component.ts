import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, MatTooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideFade', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition('hidden => visible', [animate('500ms ease-out')]),
      transition('visible => hidden', [animate('300ms ease-in')]),
    ]),
    trigger('slideFadeSearch', [
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(100px)' })),
      transition('hidden => visible', [animate('500ms ease-out')]),
      transition('visible => hidden', [animate('300ms ease-in')]),
    ]),
  ],
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
