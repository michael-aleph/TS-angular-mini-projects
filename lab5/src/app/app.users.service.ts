import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AppUsersService {
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>('https://randomuser.me/api/?results=50');
  }
}
