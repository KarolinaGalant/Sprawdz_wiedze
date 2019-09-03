import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name='';
  surname='';
  mail='';
  login = '';
  password = '';
  users= [];

  constructor(private configService: ConfigService, private router: Router) { }

  ngOnInit() {
  }
  Registration(formreg){
    this.configService.registration(
      formreg.controls["name"].value,
      formreg.controls["surname"].value,
      formreg.controls["mail"].value,
      formreg.controls["login"].value,
      formreg.controls["password"].value,
      formreg.controls["role"].value,      
    ).subscribe(formreg => this.users.push(formreg));
    this.router.navigateByUrl('/online');
  }

}
