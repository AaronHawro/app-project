import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(`${this.apiUrl}/task`);
  }

  getTaskById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/task/id/${id}`);
  }

  getTaskComments(id: number) {
    return this.http.get(`${this.apiUrl}/task/id/${id}/comments`)
  }

  createTask(data: any) {
    return this.http.post(`${this.apiUrl}/task`, data);
  }

  updateTask(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/task/id/${id}`, data);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.apiUrl}/task/id/${id}`);
  }
}
