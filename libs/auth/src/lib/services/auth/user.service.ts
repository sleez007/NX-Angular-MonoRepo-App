import { Injectable } from '@angular/core';
import {  User } from '@sample-pro/data-models';
import { BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
    userSubject$ = new BehaviorSubject<User | null>(null);
    user$ = this.userSubject$.asObservable();
}
