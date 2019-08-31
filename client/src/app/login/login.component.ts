
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user(user: any) {
    throw new Error("Method not implemented.");
  }

  login = '';
  password = '';

  // tslint:disable-next-line:max-line-length
  constructor(private configService: ConfigService, private dataService: DataService, private router: Router, private formBuilder: FormBuilder) {
  }

  loginForm: FormGroup;
  isSubmitted = false;

  Login(formlogin) {
    console.log(formlogin.controls["login"].value)
    this.configService.login(
      formlogin.controls["login"].value,
      formlogin.controls["password"].value
    )
      .subscribe(
        r => {
          if (r.length) {
            this.dataService.setToken("zalogowano");
            this.dataService.setCredentials(

              formlogin.controls["login"].value,
              formlogin.controls["password"].value
            )
            this.router.navigateByUrl('/online');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

}
