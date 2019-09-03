import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;
  isStudent: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.isAdmin = this.data.isAdmin();
    this.isStudent = this.data.isStudent();
  }

  logout() {
    this.data.logout();
  }
}
