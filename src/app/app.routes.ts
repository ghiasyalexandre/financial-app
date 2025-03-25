import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BankingComponent } from './banking/banking.component';
import { MortgagesComponent } from './mortgages/mortgages.component';
import { InvestingComponent } from './investing/investing.component';
import { CreditcardsComponent } from './creditcards/creditcards.component';
import { LoansComponent } from './loans/loans.component';
import { HomeequityComponent } from './homeequity/homeequity.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AllCalculatorsComponent } from './all-calculators/all-calculators.component';
import { ArticleComponent } from './article/article.component';
import { LoansCalculatorsComponent } from './loans-calculators/loans-calculators.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'banking',
    component: BankingComponent,
  },
  {
    path: 'mortgages',
    component: MortgagesComponent,
  },
  {
    path: 'mortgages/mortgage-calculator',
    component: MortgageCalculatorComponent,
  },
  {
    path: 'investing',
    component: InvestingComponent,
  },
  {
    path: 'credit-cards',
    component: CreditcardsComponent,
  },
  {
    path: 'loans',
    component: LoansComponent,
  },
  {
    path: 'loans/calculators',
    component: LoansCalculatorsComponent,
  },
  {
    path: 'home-equity',
    component: HomeequityComponent,
  },
  {
    path: 'insurance',
    component: InsuranceComponent,
  },
  {
    path: 'all-calculators',
    component: AllCalculatorsComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
];
