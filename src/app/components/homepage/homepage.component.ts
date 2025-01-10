import { Component } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
