import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatBadgeModule} from "@angular/material/badge";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    RouterOutlet,
    AmplifyAuthenticatorModule,
    MatToolbarModule,
    MatBadgeModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    RouterOutlet,
    AmplifyAuthenticatorModule,
    MatToolbarModule,
    MatBadgeModule,
    MatDialogModule
  ]
})
export class SharedModule { }
