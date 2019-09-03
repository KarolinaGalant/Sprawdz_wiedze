import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GetTestResultModel } from '../test/getTestResultModel';
import { AddTestResultModel } from '../addtest/addTestResultModel';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {

  constructor(private configService: ConfigService, private router: Router, private dataService: DataService) { }
  test: GetTestResultModel;
  testName: AddTestResultModel;

  ngOnInit() {
  }
  showTest(){
    this.configService.getTest(
      localStorage.getItem("question"),
      localStorage.getItem("answer1"),
      localStorage.getItem("answer2"),
      localStorage.getItem("answer3"),
      localStorage.getItem("answer4"),
      localStorage.getItem("correctAnswer"),
      localStorage.getItem("open"),
      this.dataService.getTestId(),
    ).subscribe((test) => {this.test = test;
    console.log(this.test);
    });

  }
  showTestName() {
    this.configService.getTestNameById(
      null,
      localStorage.getItem("testName"),
      this.dataService.getTestId()
    ).subscribe((testName) => {
      this.testName = testName;
      console.log(this.testName);
    })
  }

}
