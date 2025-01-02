import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss'],
  imports: [FormsModule, CommonModule]
})

export class MortgageCalculatorComponent {
  principal = 300000;      // Default principal
  annualInterestRate = 3.5; // Default annual interest rate (in %)
  years = 30;              // Default loan term in years

  monthlyPayment = 0;

  /**
   * Calculate the monthly mortgage payment.
   */
  calculateMortgage(): void {
    // Convert the annual interest rate to a monthly rate in decimal form
    const monthlyInterestRate = (this.annualInterestRate / 100) / 12;

    // Number of monthly payments
    const numberOfPayments = this.years * 12;

    // If interest rate is 0, handle as a simple division
    if (monthlyInterestRate === 0) {
      this.monthlyPayment = this.principal / numberOfPayments;
      return;
    }

    // Mortgage payment formula
    this.monthlyPayment = 
      this.principal *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)));
  }
}
