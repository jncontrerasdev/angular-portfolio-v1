import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = '../assets/experience-data.json';

  constructor(private http: HttpClient) {}

  getWorkExperiences(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data: any) => data.experiences)
    );
  }
}