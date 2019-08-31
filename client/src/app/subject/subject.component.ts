import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { DataService } from '../data.service';
import { ClassesListResultModel } from '../classes-list/classes-listResultModel';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  name: string = '';
  myClass: ClassesListResultModel;

  constructor(private route: ActivatedRoute, private dataService: DataService, private configService: ConfigService) { }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('name'))
    this.route.params.subscribe(n => this.name = n['name']);
    this.check();

  }

  check() {
    this.configService.getMyClass(
      this.dataService.getLogin(),
    ).subscribe((myClass) => {
    this.myClass = myClass;
      console.log(this.myClass);
    });
  }
}
