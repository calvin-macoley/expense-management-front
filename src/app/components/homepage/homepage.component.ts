import { Component } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {MyExpensesComponent} from "../my-expenses/my-expenses.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SharedModule, MyExpensesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
