import { Component } from '@angular/core';

import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatTooltipModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
