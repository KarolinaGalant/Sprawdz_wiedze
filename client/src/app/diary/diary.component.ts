import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { AllClassesResultModel } from './AllClassesResultModel';

@Component({
  selector: 'app-dziennik',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  allclasseslist: AllClassesResultModel;

  constructor(private configService: ConfigService, private router: Router) { }

  ngOnInit() {
    this.showAllClasses();
  }
  showSubject(subject) {
    this.router.navigate([`/subject/${subject.target.innerHTML}`])
    console.log(subject.target.innerHTML);
  }

  showAllClasses() {
    this.configService.getAllClasses(
      localStorage.getItem('nameS'),
      localStorage.getItem('description'),
    ).subscribe((allclasseslist) => {
    this.allclasseslist = allclasseslist;
      console.log(this.allclasseslist);
    });
  }
}
