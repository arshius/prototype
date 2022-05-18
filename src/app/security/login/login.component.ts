import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { Credential } from '../token/credential';

@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private router: Router,
              private client: HttpClient) {
  }

  ngOnInit(): void {

  }

  checked(e: any) {
    console.log(e.target.checked);
  }

  on(e: any) {
    var element = (e.target as HTMLElement);
    (element.parentElement as HTMLElement).classList.add('active');
  }
  off(e: any) {
    var element = (e.target as HTMLElement);
    (element.parentElement as HTMLElement).classList.remove('active');
  }
  login(e: any) {
    var element = (e.target as HTMLElement);
    (element.parentElement as HTMLElement).setAttribute("disabled", "true");
    const credential: Credential = { username: "", password: "" };
    this.auth.login(credential).subscribe(data => { 
      console.log(data);
      this.router.navigate(['home']);
      // this.router.navigate(['/aims/']).then(() => {
      //   window.location.reload();
      // });
      console.log(' homeee ');
    });
    // this.auth.login(credential).subscribe(
    //   {
    //     next(data) {
    //       console.log('ok');
    //       console.log(data);
    //     },
    //     error() {
    //       console.log('error');
    //     },
    //     complete() {
    //       console.log('completed!');
    //     }
    //   });
  }
}
