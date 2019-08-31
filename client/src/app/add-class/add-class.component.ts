import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent {
  subject = [];
  nameS = '';
  description = '';

constructor(private configService: ConfigService, private formBuilder: FormBuilder, private router: Router, private dataService: DataService) {
  }

  addClass(formaddclass) {
    this.configService.addClass(
      formaddclass.controls["nameS"].value,
      formaddclass.controls["description"].value,
      this.dataService.getLogin()
    ).subscribe(formaddclass => this.subject.push(formaddclass));
    this.router.navigateByUrl('/classeslist');
  }
}
