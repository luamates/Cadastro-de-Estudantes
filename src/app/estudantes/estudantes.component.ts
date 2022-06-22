import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';
import { ESTUDANTES } from '../mock-students';

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
  
/*
  getEstudantes(): void {
    this.estudanteService.getEstudantes(this.estudante.id)
      .subscribe(estudantes => estudantes = estudantes);
  }
  */

  getEstudantes(): void {
    this.estudanteService.getEstudante()
      .subscribe(Estudante => this.estudantes = ESTUDANTES.slice(1, 10));
  }



  ngOnInit(): void {
    this.getEstudantes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.estudanteService.addEstudante({ name } as Estudante)
      .subscribe(estudante => {
        this.estudantes.push(estudante);
      });
  }

  delete(estudante: Estudante): void {
    this.estudantes = this.estudantes.filter(h => h !== estudante);
    //this.estudanteService.deleteEstudante(estudante.id).subscribe();
  }
}
