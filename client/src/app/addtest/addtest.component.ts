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
  testName = [];

  constructor(private configService: ConfigService, private dataService: DataService, private router: Router, private formBuilder: FormBuilder) {

  }
  ngOnInit() {
  }

  addTestName(formaddtest) {
    this.configService.addTestName(
      formaddtest.controls["testName"].value,
      this.dataService.getSubjectId()
    ).subscribe(formaddtest => {
      this.testName.push(formaddtest),
      console.log(formaddtest),
      this.dataService.setTestId(formaddtest.insertId),
      this.router.navigate([`/question`])

    })
  }


}
