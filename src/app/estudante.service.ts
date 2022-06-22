import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTES } from './mock-students';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EstudanteService: ${message}`);
  }

  private estudantesUrl = 'http://localhost:3000/Estudante';  // URL to web api





getEstudantes(id?: number): Observable<Estudante> {
  const url = `${this.estudantesUrl}/${id}`;
  return this.http.get<Estudante>(url).pipe(
    tap(_ => this.log(`fetched student id=${id}`)),
    catchError(this.handleError<Estudante>(`getEstudante id=${id}`))
  );
}


  getEstudante(id?: number) {
    const e = ESTUDANTES.find(e => e.id === id)!;
    this.messageService.add(`EstudanteService: fetched estudante=${id}`);
    return of(e);
  }
 
   /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
