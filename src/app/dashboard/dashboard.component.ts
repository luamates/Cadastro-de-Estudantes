import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';
import { ProfessorService } from '../professor.service';
import { Professor } from '../professor';
import { ESTUDANTES } from '../mock-students';
import { PROFESSORES } from '../mock.teachers';
import { ProfessoresComponent } from '../professores/professores.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  estudantes: Estudante[] = [];
  professores: Professor[] = [];

  selectedProfessor?: Professor;
  onSelect(professor: Professor): void {
    this.selectedProfessor = professor;
  }

  


  constructor(private EstudanteService: EstudanteService, private ProfessorService: ProfessorService) { }

  ngOnInit(): void {
    this.getEstudantes();
    this.getProfessores();
  }

  getEstudantes(): void {
    this.EstudanteService.getEstudantes()
      .subscribe(Estudante => this.estudantes = ESTUDANTES.slice(1, 5));
  }

  getProfessores(): void {
    this.ProfessorService.getProfessores()
      .subscribe(professores => this.professores = professores);
  }





/*
  getProfessores(): void {
    this.ProfessorService.getProfessores()
      .subscribe(PROFESSORES => this.professores = PROFESSORES.slice(1, 5));
  }

*/







}