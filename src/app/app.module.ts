import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { CourseSelectionComponent } from './course-selection/course-selection.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdmissionsComponent } from './admissions/admissions.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CoursesComponent } from './courses/courses.component';
import { ProgramsComponent } from './programs/programs.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PaymentComponent,
    CourseSelectionComponent,
    SchedulingComponent,
    AdmissionsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactsComponent,
    CoursesComponent,
    ProgramsComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
