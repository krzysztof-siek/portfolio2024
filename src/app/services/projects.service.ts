import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectsInterface} from "../interfaces/projects.interface";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = 'assets/projects/projects.json';

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<ProjectsInterface[]> {
    return this.http.get<ProjectsInterface[]>(this.projectsUrl);
  }
}

