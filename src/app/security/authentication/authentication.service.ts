import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credential } from '../token/credential';
import { User } from '../token/user';

const apiUrl = environment.baseApiUrl + '/authenticate';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  attempAuth(credential: Credential): Observable<any> {
    // const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(credentials.username + ':' + credentials.password));

    console.log('attempAuth ::');
    // console.log(headers);
    // return this.http.get<User>(`${apiUrl}/user`, { headers })
    //   .pipe(
    //     tap(data=> {
    //       console.log('do::');
    //       console.log(data);
    //       this.store.setState({
    //         user: data, authenticated: Boolean(data)
    //       });
    //     })
    //   )
    return new Observable();
  }

  login(credential: Credential): Observable<any> {
    return this.http.get<User[]>('assets/mocks/user.json')
      .pipe(
        map(users => users.filter(user => user.username === 'admin')),
        map(users => {return users[0]}),
        // tap(data => {
          // console.log('do::');
          // console.log(data);
          // this.store.setState({
          //   user: data, authenticated: Boolean(data)
          // });
        // })
      )
  }
  logout(credential: Credential): Observable<any> {
    return new Observable();
  }
}
