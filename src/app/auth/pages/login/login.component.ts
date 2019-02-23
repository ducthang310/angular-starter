import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  isChecking = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  submit() {
    this.isChecking = true;
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe(res => {
      this.isChecking = false;
      this.authService.setToken(res.access_token);
      this.router.navigate(['/dashboard']);
    }, res => {
      this.isChecking = false;
      this.toastr.error('Email hoặc mật khẩu không đúng');
    });
  }

  ngOnInit() {
  }

}
