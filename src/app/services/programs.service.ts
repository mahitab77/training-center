// src/app/services/programs.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramsData } from '../models/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  private dataPath = 'assets/local-data/programs.json'; 

  constructor(private http: HttpClient) { }

  getProgramsData(): Observable<ProgramsData> {
    return this.http.get<ProgramsData>(this.dataPath);
  }
 
}
