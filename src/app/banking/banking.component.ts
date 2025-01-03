import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  imports: [CommonModule],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss'
})
export class BankingComponent {
  // Flag to control visibility of the alert bar
  isAlertVisible = true;

  // Method to hide the alert bar
  hideAlert() {
    this.isAlertVisible = false;
  }
}
