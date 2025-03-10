import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get(`${this.apiUrl}/comment`);
  }

  getComment(id: number) {
    return this.http.get(`${this.apiUrl}/comment/${id}`);
  }

  createComment(data: any) {
    return this.http.post(`${this.apiUrl}/comment`, data);
  }

  deleteComment(id: number) {
    return this.http.delete(`${this.apiUrl}/comment/${id}`);
  }
}
