import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
  }
}
