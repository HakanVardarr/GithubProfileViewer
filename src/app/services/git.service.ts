import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../models/APIResponse';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitService {
  constructor(private http: HttpClient) {}
  searchUser(username: string): Observable<APIResponse<User>> {
    return this.http.get<APIResponse<User>>(
      'https://api.github.com/search/users',
      {
        params: new HttpParams().set('q', username),
      }
    );
  }
}
