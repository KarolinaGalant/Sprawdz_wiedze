import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  name: string = ''; 
  subjecttest: any;

  // @Input()
  // questionsList;

  constructor(private router: Router,private route: ActivatedRoute, private configService: ConfigService, private dataService: DataService) { }

  ngOnInit() {
  }
  question = '';
  answerA = '';
  answerB = '';
  answerC = '';
  answerD = '';
  correctAnswer = '';
  closetests = [];

    addTest(formaddtest) {
    this.configService.addTest(
      formaddtest.controls["question"].value,
      formaddtest.controls["answerA"].value,
      formaddtest.controls["answerB"].value,
      formaddtest.controls["answerC"].value,
      formaddtest.controls["answerD"].value,
      formaddtest.controls["correctAnswer"].value,
      formaddtest.controls["open"].value,
      this.dataService.getTestId(),
      ).subscribe(formaddtest => this.closetests.push(formaddtest));
      this.router.navigateByUrl('/question');
      
  }
  addIdTestToSubjecttest(){
    this.configService.addIdTestToSubjecttest(
      this.dataService.getSubjectId(),
      this.dataService.getTestId()
    ).subscribe ((subjecttest) => {
    this.subjecttest = subjecttest;
    console.log(this.subjecttest);
    });
  }
}
