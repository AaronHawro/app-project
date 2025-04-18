import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user`);
  }

  getUserById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/user/id/${id}`);
  }

  getUserByUsername(username: string) {
    return this.http.get<any>(`${this.apiUrl}/user/username/${username}`);
  }

  createUser(data: any) {
    return this.http.post(`${this.apiUrl}/user`, data);
  }

  updateUser(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/user/id/${id}`, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/user/id/${id}`);
  }
}
