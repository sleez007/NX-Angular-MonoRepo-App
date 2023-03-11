import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate, User } from '@sample-pro/data-models';
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient, private userService: UserService) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userService.userSubject$.next(JSON.parse(user));
    }
  }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/login', authenticate)
    .pipe(tap((user: User) =>{ 
      this.userService.userSubject$.next(user);
      localStorage.setItem('user', JSON.stringify(user));
    }));
  }
}
