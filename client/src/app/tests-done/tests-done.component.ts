import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { AddTestResultModel } from '../addtest/addTestResultModel';
import { TestDoneResultModel } from './testDoneResultModel';
import { AnswerResultModel } from './answerResultModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tests-done',
  templateUrl: './tests-done.component.html',
  styleUrls: ['./tests-done.component.css']
})
export class TestsDoneComponent implements OnInit {
  tests: TestDoneResultModel[];
  testName: AddTestResultModel;
  answers: any;
  answer: AnswerResultModel;

  constructor(private configService: ConfigService, private router: Router, private dataService: DataService) { }
  

  ngOnInit() {
    this.showTestName();
    this.showTestDone();
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
  addAnswer(formaddanswer) {
    console.log(this.answers);
    this.answers.forEach((element, index) => {
      this.configService.addAnswer(
        this.dataService.getTestId(),
        this.dataService.getLogin(),
        element,
        this.tests[index].idQuestion,
        this.dataService.getIdUser()
      ).subscribe(formaddanswer => this.answers.push(formaddanswer));
    });
  

    console.log(this.answers);
    this.router.navigateByUrl('/content');
  }
  showTestDone() {
    console.log(localStorage.getItem("idQuestion"));
    this.configService.getDoneTest(
      localStorage.getItem("idQuestion"),
      localStorage.getItem("question"),
      localStorage.getItem("answer1"),
      localStorage.getItem("answer2"),
      localStorage.getItem("answer3"),
      localStorage.getItem("answer4"),
      +localStorage.getItem("open"),
      this.dataService.getTestId(),
    ).subscribe((tests) => {this.tests = tests;
      this.answers = new Array(tests.length);
      console.log(this.tests);
      });

  }
}
