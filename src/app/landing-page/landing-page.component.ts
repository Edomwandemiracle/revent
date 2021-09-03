import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  activeState = 'All';
  states = ['All', 'Website', 'MobileApp', 'CSS', 'GitHub'];
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
    ),
    // phone: new FormControl('', Validators.required),
    // subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  setStateAsActive(state) {
    this.activeState = state;
  }

  submit() {
    console.log('Data', this.contactForm.value);
  }
}
