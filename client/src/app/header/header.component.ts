import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.isAdmin = this.data.isAdmin();
  }

  logout() {
    this.data.logout();
  }
}
