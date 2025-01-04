import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-creditcards',
  imports: [CommonModule],
  templateUrl: './creditcards.component.html',
  styleUrl: './creditcards.component.scss'
})
export class CreditcardsComponent {
  // Flag to control visibility of the alert bar
  isAlertVisible = true;

  // Method to hide the alert bar
  hideAlert() {
    this.isAlertVisible = false;
  }
}
