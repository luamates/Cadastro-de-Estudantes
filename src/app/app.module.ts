import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfessoresComponent } from './professores/professores.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    StudentDetailComponent,
    MessagesComponent,
    ProfessoresComponent,
    TeacherDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
