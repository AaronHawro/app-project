import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get(`${this.apiUrl}/team`);
  }

  getTeam(id: number) {
    return this.http.get<any>(`${this.apiUrl}/team/id/${id}`);
  }

  createTeam(data: any) {
    return this.http.post(`${this.apiUrl}/team`, data);
  }

  updateTeam(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/team/id/${id}`, data);
  }

  deleteTeam(id: number) {
    return this.http.delete(`${this.apiUrl}/team/id/${id}`);
  }
}
