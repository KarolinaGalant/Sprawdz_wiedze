import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { ContentResultModel } from './contentResultModel';
import { TestListResultModel } from './testListResultModel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  testList: TestListResultModel;
  rating: ContentResultModel;
  // date = new Date();
  // constructor(private data: DataService) { }
  constructor(private configService: ConfigService, private router: Router) { }

  ngOnInit() {
    this.showRating();
    this.showTestList();
   }
   showRating(){
     this.configService.getRating(
      localStorage.getItem("nameS"),
      localStorage.getItem("rating"),
     ).subscribe((rating) => {this.rating = rating;
      console.log(this.rating);
    });

   }
   showTestList(){
    this.configService.getTestList(
      localStorage.getItem("idsubject"),
      localStorage.getItem("idTest"),
    ).subscribe((testList) => {this.testList = testList;
      console.log(this.testList);
    })
  }
}
