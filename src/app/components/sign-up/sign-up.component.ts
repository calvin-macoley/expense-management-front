import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      lastname: ['', [Validators.required]],
      firstname: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    if(this.signUpForm.valid) {
      console.log('OK');
    } else {
      console.log('NOT OK');
    }
  }
}
