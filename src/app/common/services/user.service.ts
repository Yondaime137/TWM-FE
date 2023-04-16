import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../models/User.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url =
    'http://localhost:8080/users';
  constructor(private http: HttpClient) { }

  getUser(userEmail: String): Observable<User> {
    return this.http.get<User>(`${this.url}/email:${userEmail}`);
  }
  createUser(user: User): Observable<number> {
    return this.http.post<number>(this.url, user);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>
    (`${this.url}/${user.id}`, user);
  }
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>
    (`${this.url}/${userId}`);
  }

}
