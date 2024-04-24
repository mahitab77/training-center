import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { CourseSelectionComponent } from './course-selection/course-selection.component';
import { CoursesComponent } from './courses/courses.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course-selection', component: CourseSelectionComponent },
  { path: 'programs',component: ProgramsComponent},
  { path: 'teachers',component: TeachersComponent},
  { path: 'payment', component: PaymentComponent },
  { path: 'scheduling', component: SchedulingComponent },
  { path: 'contacts',component: ContactsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
