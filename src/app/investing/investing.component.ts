import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-investing',
  imports: [CommonModule],
  templateUrl: './investing.component.html',
  styleUrl: './investing.component.scss'
})
export class InvestingComponent {
  // Flag to control visibility of the alert bar
  isAlertVisible = true;

  // Method to hide the alert bar
  hideAlert() {
    this.isAlertVisible = false;
  }
}
