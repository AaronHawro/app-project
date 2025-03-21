import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/project`);
  }

  getProjectById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/project/id/${id}`);
  }

  createProject(data: any) {
    return this.http.post(`${this.apiUrl}/project`, data);
  }

  updateProject(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/project/id/${id}`, data);
  }

  deleteProject(id: number) {
    return this.http.delete(`${this.apiUrl}/project/id/${id}`);
  }
}
