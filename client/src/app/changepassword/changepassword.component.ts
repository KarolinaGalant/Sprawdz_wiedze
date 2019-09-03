import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  password = [];

  constructor(private configService: ConfigService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  changepassword(formchangepassword) {
    if (formchangepassword.password1 == formchangepassword.password2) {
      this.configService.changepassword(
        formchangepassword.controls["password1"].value,
        this.dataService.getIdUser()
      ).subscribe(formchangepassword => 
        this.password.push(formchangepassword));
      this.router.navigateByUrl('/profil');

    }
  }

}


