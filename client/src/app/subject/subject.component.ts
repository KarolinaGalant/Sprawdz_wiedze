import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { DataService } from '../data.service';
import { ClassesListResultModel } from '../classes-list/classes-listResultModel';
import { AddTestResultModel } from '../addtest/addTestResultModel';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  name: string = '';
  myClass: ClassesListResultModel;
  tests: any;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private configService: ConfigService) { }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('name'))
    this.route.params.subscribe(n => this.name = n['name']);
    this.check();
    this.getTestName();

  }

  check() {
    this.configService.getMyClass(
      this.dataService.getLogin(),
    ).subscribe((myClass) => {
    this.myClass = myClass;
      console.log(this.myClass);
    });
  }
  getTestName(){
    this.configService.getTestName(
      null,
      null,     
      this.dataService.getSubjectId()
    ).subscribe((tests) => {this.tests = tests;
      // this.answers = new Array(tests.length);
      console.log(this.tests);
      });

  }

  onSelectSubject(event, test: AddTestResultModel){
    this.dataService.setTestId(test.idTest);
    this.router.navigate([`/testdone`]);
  }
  
}
