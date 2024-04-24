// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'assets/local-data/courses.json';  

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
      .pipe(
        catchError(error => {
          
          console.error('Error fetching courses', error);
          return []; // Return an empty array or Observable.throw(error) as a fallback
        })
      );
  }
}
