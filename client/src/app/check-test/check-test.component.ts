import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { GetTestResultModel } from '../test/getTestResultModel';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-check-test',
  templateUrl: './check-test.component.html',
  styleUrls: ['./check-test.component.css']
})
export class CheckTestComponent implements OnInit {
  test: GetTestResultModel;
  score = [];


  constructor(private configService: ConfigService, private router: Router, private dataService: DataService) { }


  ngOnInit() {
    this.showTestToCheck();
  }

  showTestToCheck() {
    this.configService.getTestToCheck(
      localStorage.getItem("idQuestion"),
      localStorage.getItem("question"),
      localStorage.getItem("answer1"),
      localStorage.getItem("answer2"),
      localStorage.getItem("answer3"),
      localStorage.getItem("answer4"),
      localStorage.getItem("correctAnswer"),
      localStorage.getItem("answer"),
      this.dataService.getTestId(),
      this.dataService.getIdUserTest(),
    ).subscribe((test) => {
    this.test = test;
      console.log(this.test);
    });
  }
  addScore(formaddscore) {
    this.configService.addScore(
      formaddscore.controls["points"].value,
      formaddscore.controls["rating"].value,
      this.dataService.getIdUserTest(),
      this.dataService.getTestId(),
    ).subscribe(formaddscore => this.score.push(formaddscore));
    this.router.navigateByUrl('/classeslist');

  }


}
