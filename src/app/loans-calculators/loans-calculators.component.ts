import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loans-calculators',
  imports: [CommonModule, RouterLink],
  templateUrl: './loans-calculators.component.html',
  styleUrl: './loans-calculators.component.scss'
})
export class LoansCalculatorsComponent {
  // Flag to control visibility of the alert bar
  isAlertVisible = true;

  // Method to hide the alert bar
  hideAlert() {
    this.isAlertVisible = false;
  }
}
