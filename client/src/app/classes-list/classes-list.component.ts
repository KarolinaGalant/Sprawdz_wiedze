import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { ClassesListResultModel } from './classes-listResultModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {
  classeslist: ClassesListResultModel;


  constructor(private configService: ConfigService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.showClassesList()
  }
  showSubjectAdmin(subjectAdmin) {
    this.router.navigate([`/subjectadmin/${subjectAdmin.target.innerHTML}`])
    console.log(subjectAdmin.target.innerHTML);
  }

  showClassesList() {
    this.configService.getClasses(
      this.dataService.getLogin(),
    ).subscribe((classeslist) => {
    this.classeslist = classeslist;
      console.log(this.classeslist);
    });

  }

}
