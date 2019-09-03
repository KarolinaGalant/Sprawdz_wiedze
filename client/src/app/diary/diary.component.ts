import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { AllClassesResultModel } from './AllClassesResultModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dziennik',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  allclasseslist: any;

  constructor(private configService: ConfigService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.showAllClasses();
  }
  showSubject(subject, classes: AllClassesResultModel) {
    this.router.navigate([`/subject/${subject.target.innerHTML}`])
    console.log(subject.target.innerHTML);
    this.dataService.setSubjectId(classes.idsubject);
  }

  showAllClasses() {
    this.configService.getAllClasses(
      localStorage.getItem('idsubject'),
      localStorage.getItem('nameS'),
      localStorage.getItem('description'),
    ).subscribe((allclasseslist) => {
    this.allclasseslist = allclasseslist;
      console.log(this.allclasseslist);
    });
  }

}
