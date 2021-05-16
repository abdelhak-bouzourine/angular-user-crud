import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/users'

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }

  /**
updateTaskReminder(task: User): Observable<User> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<User>(url, task, httpOptions);
  }
   */


  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }
}
