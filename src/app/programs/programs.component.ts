import { Component ,OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { ProgramsData, Programs, Program } from '../models/program.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})

export class ProgramsComponent implements OnInit {
  programsData!: ProgramsData;
  selectedAgeGroup: keyof Programs | null = null;
  programGroups: (keyof Programs)[] = ['ages_4_6', 'ages_7_10', 'ages_11_13', 'ages_14_18', 'cross_age_programs'];
  
  constructor(private programsService: ProgramsService, private router: Router) {}

  ngOnInit(): void {
    this.programsService.getProgramsData().subscribe({
      next: (data) => {
        this.programsData = data;
      },
      error: (error) => console.error('Failed to load program data:', error)
    });
  }

  selectAgeGroup(ageGroup: keyof Programs): void {
    this.selectedAgeGroup = ageGroup;
    console.log('Selected Age Group:', this.selectedAgeGroup); 
  }

  getProgramGroup(): Program[] {
    if (!this.selectedAgeGroup || !this.programsData.programs[this.selectedAgeGroup]) {
      return [];
    }
    return this.programsData.programs[this.selectedAgeGroup];
  }
  
  navigateToRegistration(program: Program): void {
    this.router.navigate(['/registration'], { state: { program: program } });
  }

}
