import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professor: Professor = {
    id: 1,
    nome: 'Angelina Melaré',
    CPF: '350.389.398-89'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
