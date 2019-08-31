import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm } from '@angular/forms';
import { LoginResultModel } from '../login/loginResultModel';
import { AddTestResultModel } from './addTestResultModel';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
  iduser: LoginResultModel;
  user: LoginResultModel;
  testName= [];

  constructor(private configService: ConfigService, private dataService: DataService, private router: Router, private formBuilder: FormBuilder) {
  
  }
  ngOnInit() {
    this.getIdUser();
  }
  getIdUser() {
    this.configService.getIdUser(
      localStorage.getItem("login"),
      localStorage.getItem("password"),
      localStorage.getItem("iduser"),
    ).subscribe((user) => {
    this.user = user;
      console.log(this.user);

    });
  }
  addTestName(formaddtest){
    this.configService.addTestName(
      formaddtest.controls["testName"].value,
    ).subscribe(formaddtest => this.testName.push(formaddtest));
    this.router.navigateByUrl('/question');
  }


}
