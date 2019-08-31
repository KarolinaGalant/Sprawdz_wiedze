import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { GetTestResultModel } from './getTestResultModel';
import { AddTestResultModel } from '../addtest/addTestResultModel';

@Component({
  selector: 'app-admin',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test: GetTestResultModel;
  testName: AddTestResultModel;
  
  constructor(private configService: ConfigService, private router: Router) { }

  ngOnInit() {
    this.showTest();
    this.showTestName();
  }

  showTest(){
    this.configService.getTest(
      localStorage.getItem("question"),
      localStorage.getItem("answer1"),
      localStorage.getItem("answer2"),
      localStorage.getItem("answer3"),
      localStorage.getItem("answer4"),
      localStorage.getItem("correctAnswer"),
      localStorage.getItem("attachment"),
    ).subscribe((test) => {this.test = test;
    console.log(this.test);
    });

  }
  showTestName() {
    this.configService.getTestNameById(
      null,
      localStorage.getItem("testName"),
      1+''
    ).subscribe((testName) => {
      this.testName = testName;
      console.log(this.testName);
    })
  }
}
