import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

// @Injectable()
@Injectable({ providedIn: 'root' })
export class DataGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.dataService.isLoggedIn()) {
      return true;
  
    }else {
      this.router.navigate(["/login"]);
      return false;

    }
  }
}
