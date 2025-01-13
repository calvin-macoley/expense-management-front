import { Routes } from '@angular/router';
import {SignUpComponent} from "@aws-amplify/ui-angular";

export const routes: Routes = [
  { path:'sign-up', component: SignUpComponent },
  { path:'my-expense/:id/details', component: SignUpComponent }
];
