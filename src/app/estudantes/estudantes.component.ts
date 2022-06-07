import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  estudantes: Estudante[] = [];

  estudante: Estudante = {
    id: 1,
    name: 'Sérgio Pato',
    idade: 34,
    curso: 'Direito',
    semestre: '4'
  }
  
  selectedEstudante?: Estudante;

  constructor(private estudanteService: EstudanteService) { }

  onSelect(estudante: Estudante): void {
    this.selectedEstudante = estudante;
  }
  

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes);
  }

  ngOnInit(): void {
    this.getEstudantes();
  }
}
