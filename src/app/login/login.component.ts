import {Component, OnInit} from '@angular/core';
import {User} from './User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('', '');

  constructor(private router: Router) {

  }

  goTo(route: string) {
    this.router.navigate([route]);
  }


  ngOnInit() {
  }

}
