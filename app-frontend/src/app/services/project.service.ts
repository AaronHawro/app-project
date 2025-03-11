import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get(`${this.apiUrl}/project`);
  }

  getProject(id: number) {
    return this.http.get<any>(`${this.apiUrl}/project/${id}`);
  }

  createProject(data: any) {
    return this.http.post(`${this.apiUrl}/project`, data);
  }

  deleteProject(id: number) {
    return this.http.delete(`${this.apiUrl}/project/${id}`);
  }
}
