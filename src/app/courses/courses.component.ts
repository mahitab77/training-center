
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses!: any[];  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }
}
