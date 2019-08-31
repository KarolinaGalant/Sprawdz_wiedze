import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService} from '../data.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  date = new Date();
  
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.dataService.logout();
    this.router.navigateByUrl('/login');
  }

}
