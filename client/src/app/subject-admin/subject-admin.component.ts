import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { ClassesListResultModel } from '../classes-list/classes-listResultModel';
import { StudentResultModel } from './studentResultModel';
import { DataService } from '../data.service';
import { AddTestResultModel } from '../addtest/addTestResultModel';
import { TestDoneByUserResultModel } from './testDoneByUserResultModel';

@Component({
  selector: 'app-subject-admin',
  templateUrl: './subject-admin.component.html',
  styleUrls: ['./subject-admin.component.css']
})
export class SubjectAdminComponent implements OnInit {
  testName: AddTestResultModel;
  testDoneByUser: TestDoneByUserResultModel;
  name: string = '';
  student: StudentResultModel;

  constructor(private router: Router, private route: ActivatedRoute, private configService: ConfigService, private dataService: DataService) { }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('name'))
    this.route.params.subscribe(n => this.name = n['name']);
    this.showSubjectStudent();
    this.showTest();
    this.showTestDoneByUser();
  }

  // showSubjectStudent() {
  //   this.configService.getSubjectStudent(
  //     this.dataService.getLogin(),
  //   ).subscribe((student) => {
  //     this.student = student;
  //     console.log(this.student);
  //   });

  // }
  showSubjectStudent() {
    this.configService.getSubjectStudent(
      null,
      null,
      null,
      null,
      this.dataService.getSubjectId()
    ).subscribe((student) => {
      this.student = student;
      console.log(this.student);
    });

  }
  showTest() {
    this.configService.getTestNameBySubject(
      null,
      localStorage.getItem("testName"),
      this.dataService.getSubjectId()
    ).subscribe((testName) => {
      this.testName = testName;
      console.log(this.testName);
  });
  }
  showTestQuestion(testQuestion, item: AddTestResultModel){
    this.router.navigate([`/test/${testQuestion.target.innerHTML}`])
    this.dataService.setTestId(item.idTest);
  }
  showTestDoneByUser(){
    this.configService.showTestDoneByUser(
      localStorage.getItem("iduser"),
      localStorage.getItem("name"),
      localStorage.getItem("surname"),
      localStorage.getItem("testName"),
      localStorage.getItem("idTest"),
      this.dataService.getSubjectId(),
    ).subscribe((testDoneByUser)=> {
      this.testDoneByUser = testDoneByUser;
      console.log(this.testDoneByUser);
    })

  }
  selectTest(testDoneByUser, item: TestDoneByUserResultModel){
    this.router.navigate([`/checktest/${testDoneByUser.target.innerHTML}`])
    this.dataService.setTestId(+item.idTest);
    this.dataService.setIdUserTest(item.iduser);

  }


  
}
