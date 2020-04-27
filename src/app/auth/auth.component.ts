import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading = false;
  error: string =  null;
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    authObs = this.authService.login(email, password);

    authObs.subscribe((resData) => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/new']);
    }, errorMessage => {
      this.error = errorMessage;
      this.isLoading = false;
    });
    form.reset();
  }
}
