import { Injectable } from '@angular/core';
import {defineAuth} from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: true
  }
})
@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor() { }
}
