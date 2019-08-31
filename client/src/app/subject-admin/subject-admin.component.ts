import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { ClassesListResultModel } from '../classes-list/classes-listResultModel';
import { StudentResultModel } from './studentResultModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject-admin',
  templateUrl: './subject-admin.component.html',
  styleUrls: ['./subject-admin.component.css']
})
export class SubjectAdminComponent implements OnInit {
  subject: ClassesListResultModel;
  name: string = '';
  student: StudentResultModel;

  constructor(private route: ActivatedRoute, private configService: ConfigService, private dataService: DataService) { }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('name'))

    this.route.params.subscribe(n => this.name = n['name']);
    this.showSubjectStudent();
  }


  // showSubjectAdmin() {
  //   this.configService.getSubject(
  //     localStorage.getItem("subject"),
  //   ).subscribe((subject) => {
  //   this.subject = subject;
  //     console.log(this.subject);
  //   });
  // }

  showSubjectStudent() {
    this.configService.getSubjectStudent(
      this.dataService.getLogin(),
    ).subscribe((student) => {
      this.student = student;
      console.log(this.student);
    });

  }
}
