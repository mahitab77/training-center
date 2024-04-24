import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Program } from '../models/program.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'] // Notice the correction from 'styleUrl' to 'styleUrls'
})
export class RegistrationComponent implements OnInit { 
  name!: string;
  email!: string;
  selectedCourse!: string;
  courses: any[] = []; // Initialize as empty array
  program: Program | null = null;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.dataService.getCourses().subscribe(data => {
      this.courses = data; // Assign data received from the service
    });

    const navigation = this.router.getCurrentNavigation();
    this.program = navigation?.extras.state?.['program'] || null;
  }

  register() {
    // Logic to handle registration
    console.log('Registered:', this.name, this.email, this.selectedCourse);
  }
}
