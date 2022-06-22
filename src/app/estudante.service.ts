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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  /** PUT: update the hero on the server */
  updateEstudante(estudante: Estudante): Observable<any> {
    return this.http.put(this.estudantesUrl, estudante, this.httpOptions).pipe(
      tap(_ => this.log(`updated student id=${estudante.id}`)),
      catchError(this.handleError<any>('updateEstudante'))
    );
  }

  /** POST: add a new hero to the server */
  addEstudante(estudante: Estudante): Observable<Estudante> {
  return this.http.post<Estudante>(this.estudantesUrl, estudante, this.httpOptions).pipe(
    tap((newEstudante: Estudante) => this.log(`added student w/ id=${newEstudante.id}`)),
    catchError(this.handleError<Estudante>('addEstudante'))
  );
}

  getEstudante(id?: number) {
    const e = ESTUDANTES.find(e => e.id === id)!;
    this.messageService.add(`EstudanteService: fetched estudante=${id}`);
    return of(e);
  }

  /** DELETE: delete the hero from the server */
deleteEstudante(id: number): Observable<Estudante> {
  const url = `${this.estudantesUrl}/${id}`;

  return this.http.delete<Estudante>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted student id=${id}`)),
    catchError(this.handleError<Estudante>('deleteEstudante'))
  );
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
