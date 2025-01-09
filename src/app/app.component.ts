import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
    imports: [RouterOutlet, AmplifyAuthenticatorModule],
})
export class AppComponent {
  title = 'GSB - Expense management';
}
