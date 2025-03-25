import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';

@Component({
  standalone: true,
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class MortgageCalculatorComponent {
  principal = 425000; // Default principal
  downPayment = 85000;
  downPercent = (this.downPayment / this.principal) * 100;
  annualInterestRate = 6.077; // Default annual interest rate (in %)
  years = 30; // Default loan term in years
  zipcode = 19150;

  propertyTax = 240;
  insurance = 72;

  monthlyPayment = 0;

  title = 'Calculator';
  chart: Chart | undefined;

  constructor() {}

  calculateChart(): void {
    // Destroy previous chart if exists
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: [
          'Principal & interest',
          'Property tax',
          "Homeowner's insurance",
        ],
        datasets: [
          {
            label: 'Monthly Payment Breakdown',
            data: [
              this.monthlyPayment - this.propertyTax - this.insurance,
              this.propertyTax,
              this.insurance,
            ],
            borderWidth: 1,
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  calculateMortgage(): void {
    const monthlyInterestRate = this.annualInterestRate / 100 / 12;
    const numberOfPayments = this.years * 12;

    let baseMonthly = 0;

    if (monthlyInterestRate === 0) {
      baseMonthly = this.principal / numberOfPayments;
    } else {
      baseMonthly =
        this.principal *
        (monthlyInterestRate /
          (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)));
    }

    this.monthlyPayment = baseMonthly + this.propertyTax + this.insurance;

    this.calculateChart(); // Update the chart after calculating
  }
}
