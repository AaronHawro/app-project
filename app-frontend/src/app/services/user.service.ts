import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}/user`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/user/${id}`);
  }

  getUserByName(name: String) {
    return this.http.get(`${this.apiUrl}/user/${name}`)
  }

  createUser(data: any) {
    return this.http.post(`${this.apiUrl}/user`, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }
}
