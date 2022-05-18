import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../security/authentication/authentication.service';
import { Credential } from '../security/token/credential';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private router: Router,
              private client: HttpClient) { }

  ngOnInit(): void {
  }

  clickNav(e: any) {
    let _signout = e.target.querySelectorAll('.logout');
    if (_signout.length > 0 ) {
      this.logout(e);
    } else {
      e.preventDefault();
      let navs = document.querySelectorAll('.nav-item');
      navs.forEach(nav => {
        nav.classList.remove('active');
        e.target.classList.add('active');
      });
    }
  }

  logout(e: any) {
    var element = (e.target as HTMLElement);
    (element.parentElement as HTMLElement).setAttribute("disabled", "true");
    const credential: Credential = { username: "", password: "" };
    this.auth.logout(credential);
    this.router.navigate(['login']);
  }
}
