import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mortgages',
  imports: [CommonModule, RouterModule],
  templateUrl: './mortgages.component.html',
  styleUrl: './mortgages.component.scss',
})
export class MortgagesComponent {
  // Flag to control visibility of the alert bar
  isAlertVisible = true;

  // Method to hide the alert bar
  hideAlert() {
    this.isAlertVisible = false;
  }
}
