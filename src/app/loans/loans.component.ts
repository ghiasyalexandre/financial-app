import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  imports: [CommonModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss'
})
export class LoansComponent {
  // Flag to control visibility of the alert bar
  isAlertVisible = true;

  // Method to hide the alert bar
  hideAlert() {
    this.isAlertVisible = false;
  }
}
