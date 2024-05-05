// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
   
  });

  httpOptions = {
    headers: this.headers_object
  };

  baseUrl: string = 'http://localhost:3000/';


  constructor(
    private http: HttpClient,
    private toast: ToastrService,

  ) {}

  getUsers(): User[] {
    return this.users;
  }
  successToast(message: any) {
    this.toast.success(message);
  }
  errorToast(message: any) {
    this.toast.error(message);
  }
  addUser(data: any): Observable<any> {
      return this.http.post(this.baseUrl + 'users', data);
  }

  getUserList(): Observable<any> {
    return this.http.get(this.baseUrl + 'users');
  }


  updateUser(userId: string, updatedUserData: any): Observable<any> {
    const url = `/users/${userId}`;
    return this.http.put(url, updatedUserData);
  }
  deleteUser(data: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'users/' + data, this.httpOptions);
  }

  
}














