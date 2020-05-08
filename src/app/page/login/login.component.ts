import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AuthData } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm: NgForm;
  error = ""
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit(form: NgForm) {
    let authObs: Observable<AuthData>;
    const value = form.value;
    authObs = this.authService.login(value)
    authObs.subscribe(
      resData => {
        window.localStorage.setItem("jwt-token", resData.token);
        this.router.navigate(['/account']);
      },
      errorMessage => {
        this.error = errorMessage.error;
      })
  }
}
