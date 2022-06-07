import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Professor } from '../professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  professores: Professor[] = [];
  professor: Professor = {
    id: 1,
    name: 'Sérgio Pato',
    CPF: 3254587589,
  }
  selectedProfessor?: Professor;
  onSelect(professor: Professor): void {
    this.selectedProfessor = professor;
  }
  constructor(private professorService: ProfessorService) { }

  getProfessores(): void {
    this.professorService.getProfessores()
      .subscribe(professores => this.professores = professores);
  }

  ngOnInit(): void {
    this.getProfessores();
  }
}
