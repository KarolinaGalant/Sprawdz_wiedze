import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { LoginResultModel } from '../login/loginResultModel';
import { DataService } from '../data.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: LoginResultModel;

  constructor(private configService: ConfigService, private router: Router, private dataService: DataService ) { }
  ngOnInit() {
    this.showUser();
  }

  showUser() {
    this.configService.getUser(
      localStorage.getItem("login"),
      localStorage.getItem("password"),
    ).subscribe((user) => {
    this.user = user;
      console.log(this.user);
      this.dataService.setIdUser(this.user[0].iduser);
    });
  }
  
}
