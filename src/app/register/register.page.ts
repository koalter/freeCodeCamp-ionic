import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private location: Location) {}

  submit() {
    console.log('form submitted!');
    this.location.back();
  }
}
